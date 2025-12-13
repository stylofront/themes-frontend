# StyloFront Theme Generator

A powerful, developer-first UI theme generator for creating production-ready design systems in seconds. Build complete themes with visual controls, real-time preview, and export in multiple formats.

## 🚀 Features

### Core Capabilities
- **Visual Theme Builder** - Intuitive interface for creating design systems
- **Real-time Preview** - See changes instantly with live preview
- **Light & Dark Mode** - Full support for both color schemes
- **Multiple Export Formats** - Export as CSS, SCSS, SASS, or JSON
- **Responsive Design** - Works seamlessly on desktop and mobile
- **No Sign-up Required** - Start creating themes immediately

### Theme Customization
- **Colors** - Primary, secondary, background, surface, text, borders, and custom colors
- **Typography** - Font sizes, line heights, font weights, and Google Fonts integration
- **Spacing** - Custom spacing tokens and scales
- **Border Radius** - Configurable radius tokens
- **Shadows** - Default and custom shadow tokens
- **Fonts** - Sans-serif and monospace font selection with Google Fonts

### Advanced Features
- **WASM Integration** - High-performance color calculations using WebAssembly
- **Expandable Tabs** - Space-efficient tab navigation with hover expansion
- **Resizable Panels** - Adjustable editor and preview panels
- **Color Picker** - Advanced color picker with hex, HSL, and preset colors
- **Theme Isolation** - Preview themes without affecting the main application
- **Export Dialog** - Copy or download themes in your preferred format

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Performance**: WebAssembly (WASM) for color calculations

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd themes-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build WASM module** (if needed)
   ```bash
   npm run wasm-build
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run wasm-build` - Build WebAssembly module

## 📁 Project Structure

```
themes-frontend/
├── app/                    # Next.js App Router pages
│   ├── generator/          # Theme generator page
│   ├── about/              # About page
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
├── components/
│   ├── generator/          # Theme generator components
│   │   ├── ThemeEditor.tsx
│   │   ├── ThemePreview.tsx
│   │   ├── ExportDialog.tsx
│   │   └── tabs/           # Editor tabs
│   ├── landing/            # Landing page components
│   ├── layout/             # Layout components
│   ├── ui/                 # Reusable UI components
│   └── animate-ui/         # Animated UI components
├── hooks/                  # Custom React hooks
│   ├── use-theme.ts        # Theme state management
│   ├── use-wasm.ts         # WASM integration
│   └── use-google-fonts.ts # Google Fonts API
├── lib/                    # Utilities and types
│   ├── types.ts            # TypeScript definitions
│   ├── colors.ts           # Color utilities
│   ├── default-theme.ts   # Default theme configuration
│   └── wasm/               # WebAssembly source
└── public/                 # Static assets
    └── wasm/               # Compiled WASM files
```

## 🎨 Usage

### Creating a Theme

1. Navigate to `/generator`
2. Use the left panel to customize:
   - **Colors**: Set primary, secondary, background, and custom colors
   - **Typography**: Configure font sizes, weights, and line heights
   - **Spacing**: Define spacing tokens
   - **Radius**: Set border radius values
   - **Shadows**: Configure shadow tokens
   - **Fonts**: Select Google Fonts for sans and mono
3. Preview changes in real-time in the right panel
4. Toggle between light and dark mode
5. Switch between desktop and mobile views
6. Export your theme when ready

### Exporting Themes

1. Click the "Export" button in the preview panel
2. Choose your format:
   - **CSS** - CSS custom properties
   - **SCSS** - SCSS variables
   - **SASS** - SASS variables
   - **JSON** - JSON format
3. Copy to clipboard or download the file

## 🎯 Key Components

### ThemeEditor
Visual editor with expandable tabs for customizing all theme properties.

### ThemePreview
Real-time preview with isolated theme rendering, supporting light/dark mode and responsive views.

### ExpandableTabTrigger
Space-efficient tab component that shows icons by default and expands to show labels on hover or when active.

### ColorPicker
Advanced color picker supporting hex, HSL, and preset colors with real-time conversion.

## 🔧 Development

### Code Style
- **Components**: PascalCase files, use shadcn/ui patterns
- **Imports**: Use `@/*` path aliases, group external libs first
- **TypeScript**: Strict mode, interfaces for all data shapes
- **CSS**: Tailwind v4 utilities, CSS variables for theming

### Architecture
- Next.js 16 App Router with server components default
- Client components marked with `'use client'`
- Framer Motion for animations
- Radix UI primitives for accessibility

## 📝 Theme Structure

Themes follow this structure:

```typescript
interface Theme {
  name: string
  baseTokens: {
    spacing: Array<{ name: string; value: string }>
    radius: Array<{ name: string; value: string }>
    typography: {
      fontSizes: Array<{ name: string; value: string }>
      lineHeights: Array<{ name: string; value: string }>
      fontWeights: Array<{ name: string; value: string }>
    }
  }
  colors: {
    light: { /* color definitions */ }
    dark: { /* color definitions */ }
  }
  shadows: {
    default: Array<{ name: string; value: string }>
    custom: Array<{ name: string; value: string }>
  }
  fonts: {
    sans: { name: string; importUrl: string }
    mono: { name: string; importUrl: string }
  }
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

See [LICENSE](LICENSE) file for details.

## 👤 Author

**Hitesh Odedara**

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and TypeScript
