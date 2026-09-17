# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, showcasing the work and skills of Jared Furtado, a Full Stack Developer and MERN Stack Developer.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Dark Mode Support**: Built-in theme switching with persistent user preference
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Interactive Components**: Dynamic typing effect, smooth scrolling, and intersection observers
- **Contact Form**: Integrated contact functionality for easy communication
- **Project Showcase**: Filterable project gallery with categories (Web Development, AI & Computer Vision, Games, Tools)
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds

## 🎯 Sections

- **Hero Section**: Introduction with animated typing effect and profile image
- **About**: Overview of skills and expertise areas (Development, Cloud Computing, Innovation)
- **Skills**: Comprehensive list of frontend and backend technologies
- **Experience**: Professional and academic experience timeline
- **Projects**: Portfolio of projects with filtering capabilities
- **Contact**: Contact form with email integration

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0**: Modern UI library for building interactive user interfaces
- **Vite**: Next-generation frontend build tool for fast development
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, performant animations

### UI Components & Libraries
- **Radix UI**: Accessible, unstyled UI components
  - Avatar, Dialog, Slot, Tooltip components
- **shadcn/ui**: Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React**: Beautiful, consistent icon set
- **Typed.js**: JavaScript typing animation library
- **Embla Carousel**: Lightweight carousel library
- **Sonner**: Toast notifications

### Form Handling
- **React Hook Form**: Performant, flexible forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form

### Development Tools
- **ESLint**: Code linting for maintaining code quality
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **Path Aliases**: Simplified imports with `@/` alias

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jjf2009/JF-Portfolio.git
   cd Personalwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
Personalwebsite/
├── public/                 # Static assets
│   └── images/            # Image files
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components (shadcn/ui)
│   │   ├── about.jsx     # About section
│   │   ├── contact.jsx   # Contact form
│   │   ├── experience.jsx # Experience timeline
│   │   ├── footer.jsx    # Footer component
│   │   ├── header.jsx    # Navigation header
│   │   ├── hero.jsx      # Hero/landing section
│   │   ├── projects.jsx  # Projects showcase
│   │   ├── skills.jsx    # Skills display
│   │   ├── theme-provider.jsx # Theme management
│   │   └── mode-toggle.jsx    # Dark mode toggle
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and data
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # TailwindCSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
├── jsconfig.json         # JavaScript configuration
├── components.json       # shadcn/ui configuration
└── package.json          # Project dependencies
```

## 🎨 Customization

### Theme Colors
The project uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root {
  --background: ...
  --foreground: ...
  --primary: ...
  /* etc. */
}
```

### Content Updates
- **Hero Section**: Edit `src/components/hero.jsx` to update name, roles, and profile image
- **About Section**: Modify `src/components/about.jsx` for personal information
- **Skills**: Update skill lists in `src/components/skills.jsx`
- **Projects**: Add/edit projects in `src/lib/projects-data.js`

## 🌐 Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| vite | ^6.3.5 | Build tool |
| tailwindcss | ^3.4.17 | CSS framework |
| framer-motion | ^11.0.0 | Animations |
| typed.js | ^2.0.12 | Typing effect |
| react-hook-form | ^7.54.1 | Form handling |
| zod | ^3.24.1 | Validation |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/jjf2009/JF-Portfolio/issues).

## 📄 License

This project is for personal use. Please contact the owner for usage permissions.

## 👤 Author

**Jared Furtado**
- Email: jaredfurtadowork@gmail.com
- GitHub: [@jjf2009](https://github.com/jjf2009)
- Institution: Goa College of Engineering

## 🙏 Acknowledgments

- [Vite](https://vite.dev/) for the amazing build tool
- [React](https://react.dev/) for the UI library
- [TailwindCSS](https://tailwindcss.com/) for the CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives

---

**Note**: This is a personal portfolio website showcasing professional work and skills. The codebase demonstrates modern web development practices using React, Vite, and TailwindCSS.
