#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check for --skip-on-error flag
const skipOnError = process.argv.includes('--skip-on-error');

console.log('Building WASM module...');
if (skipOnError) {
  console.log('(Will continue even if build fails)');
}

// Check if wasm-pack is installed
try {
  execSync('wasm-pack --version', { stdio: 'ignore' });
} catch (error) {
  console.error('wasm-pack could not be found. Please install it with:');
  console.error('  cargo install wasm-pack');
  if (!skipOnError) process.exit(1);
}

// Check if Rust/Cargo is installed
try {
  execSync('cargo --version', { stdio: 'ignore' });
} catch (error) {
  console.error('Cargo could not be found. Please install Rust:');
  console.error('  https://www.rust-lang.org/tools/install');
  if (!skipOnError) process.exit(1);
}

// Get the directory of this script
const wasmDir = __dirname;
const publicWasmDir = path.join(wasmDir, '../../public/wasm');
const targetDir = path.join(wasmDir, 'target');

// Function to remove directory (with retry for Windows file locks)
function removeDir(dirPath, retries = 5) {
  if (!fs.existsSync(dirPath)) return true;
  
  for (let i = 0; i < retries; i++) {
    try {
      if (process.platform === 'win32') {
        try {
          fs.rmSync(dirPath, { 
            recursive: true, 
            force: true, 
            maxRetries: 5, 
            retryDelay: 500 
          });
          if (!fs.existsSync(dirPath)) {
            return true;
          }
        } catch (e) {
          // Continue to next method
        }
      } else {
        execSync(`rm -rf "${dirPath}"`, { stdio: 'ignore' });
        if (!fs.existsSync(dirPath)) {
          return true;
        }
      }
    } catch (error) {
      // Continue to retry
    }
    
    if (i < retries - 1) {
      console.log(`Waiting for file locks to release... (attempt ${i + 1}/${retries})`);
      const waitTime = (i + 1) * 2000;
      const start = Date.now();
      while (Date.now() - start < waitTime) {
        // Busy wait
      }
    }
  }
  
  console.warn(`Warning: Could not fully remove ${dirPath}. You may need to delete it manually.`);
  return false;
}

// Clean target directory before building
console.log('Cleaning previous build...');
const cleaned = removeDir(targetDir);

// Create public/wasm directory if it doesn't exist
if (!fs.existsSync(publicWasmDir)) {
  fs.mkdirSync(publicWasmDir, { recursive: true });
}

// Wait a moment after cleaning
console.log('Waiting for file system to sync...');
const waitTime = 1000;
const start = Date.now();
while (Date.now() - start < waitTime) {
  // Busy wait
}

try {
  // Build the WASM module
  const buildMode = process.argv.includes('--dev') ? '--dev' : '--release';
  execSync(`wasm-pack build ${buildMode} --target web --out-dir ../../public/wasm`, {
    cwd: wasmDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      RUST_BACKTRACE: '1',
    },
  });
  
  console.log('\n✅ WASM build complete!');
  console.log('Output: public/wasm/');
} catch (error) {
  console.error('\n❌ WASM build failed.\n');
  
  if (skipOnError) {
    console.error('⚠️  Continuing without WASM (JS fallbacks will be used)');
    process.exit(0);
  }
  
  console.error('Common solutions:');
  console.error('1. Run with --skip-on-error to continue without WASM:');
  console.error('   npm run wasm-build -- --skip-on-error');
  console.error('');
  console.error('2. Make sure Rust and wasm-pack are installed');
  console.error('3. Close all programs and try again');
  process.exit(1);
}

