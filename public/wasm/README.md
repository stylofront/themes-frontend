# WASM Build Instructions

## Prerequisites

1. **Install Rust**: https://www.rust-lang.org/tools/install
2. **Install wasm-pack**:
   ```bash
   cargo install wasm-pack
   ```

## Building

```bash
npm run wasm-build
```

This will:
1. Build the Rust code to WebAssembly
2. Copy the output to `public/wasm/`
3. Make it available for the Next.js app

## Output

The built WASM module will be in `public/wasm/` directory with:
- `theme_generator_wasm.js` - JavaScript bindings
- `theme_generator_wasm_bg.wasm` - WebAssembly binary

## Troubleshooting

If the build fails:
1. Make sure Rust and wasm-pack are installed
2. Try running with `--skip-on-error` flag to continue without WASM
3. The app will use JavaScript fallbacks if WASM is not available

