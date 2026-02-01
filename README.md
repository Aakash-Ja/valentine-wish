# 💝 Valentine Glow - Celebrate Love

> _"Love is not just what you feel, it's what you do."_ — Every Day

Welcome to **Valentine Glow**, a beautiful, romantic web application designed to celebrate love, cherish memories, and create unforgettable moments together. Whether you're sharing your love story, exchanging heartfelt messages, or planning the perfect romantic surprise, Valentine Glow makes every moment special.

## 🌐 Live Demo

**Visit Valentine Glow**: [https://valentine-wish.vercel.app](https://valentine-wish.vercel.app)

## ✨ Features

### 💑 Photo Gallery

Browse and celebrate beautiful romantic moments captured in time. Every picture tells your unique love story.

### 💌 Love Notes

Express your deepest feelings with heartfelt messages. Write, share, and keep your most romantic words forever.

### 🎁 Gift Ideas

Discover thoughtful and romantic gift suggestions perfect for showing your affection to your special someone.

### 🎨 Romantic Theme

Beautiful gradient backgrounds, smooth animations, and a lovable design that celebrates romance on every page.

### 🌙 Dark & Light Modes

Choose your favorite theme - romantic pastels in light mode or deep romantic tones in dark mode.

### 📱 Fully Responsive

Perfect experience on desktop, tablet, and mobile devices. Love knows no device boundaries!

### ⚡ Fast & Smooth

Built with Vite and React for lightning-fast performance and smooth interactions.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm (or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Installation

1. **Clone the repository**

   ```sh
   git clone <YOUR_GIT_URL>
   cd valentine-glow
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or with Bun
   bun install
   ```

3. **Start the development server**

   ```sh
   npm run dev
   # or with Bun
   bun run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Start celebrating! 💕

## 📚 Project Structure

```
valentine-glow/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Navbar.tsx    # Navigation with romantic vibes
│   │   ├── ThemeProvider.tsx
│   │   └── FloatingHearts.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── Gallery.tsx   # Photo gallery
│   │   ├── LoveNotes.tsx # Love notes section
│   │   ├── Gifts.tsx     # Gift ideas
│   │   ├── About.tsx     # About us
│   │   └── Developer.tsx # Developer info
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & animations
├── public/
│   └── favicon.svg       # 💝 Romantic favicon
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind CSS config
├── vite.config.ts        # Vite config
└── vitest.config.ts      # Testing config
```

## 🎨 Customization

### Colors

Edit the color palette in [src/index.css](src/index.css):

```css
:root {
  --primary: 340 82% 52%; /* Main pink/red */
  --accent: 330 70% 60%; /* Accent color */
  --love: 350 80% 60%; /* Love theme color */
}
```

### Fonts

The app uses beautiful fonts from Google Fonts:

- **Headings**: Playfair Display (elegant serif)
- **Scripts**: Dancing Script (cursive)
- **Body**: Poppins (modern sans-serif)

### Animations

Custom romantic animations are defined in [src/index.css](src/index.css):

- `heart-float` - Floating heart animation
- `pulse-love` - Pulsing heart effect
- `shimmer` - Text shimmer effect
- `sparkle` - Sparkle effect
- `float-hearts` - Floating hearts background

## 🛠️ Available Commands

```sh
# Development
npm run dev          # Start dev server with hot reload

# Build
npm run build        # Build for production
npm run build:dev    # Build in development mode

# Testing
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run ESLint

# Preview
npm run preview      # Preview production build
```

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn UI
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Testing**: Vitest
- **Package Manager**: Bun (optional)

## 🎯 Pages Overview

- **Home (/)** - Hero section with romantic vibes and feature highlights
- **Gallery (/gallery)** - Beautiful photo gallery
- **Love Notes (/love-notes)** - Share and view heartfelt messages
- **Gift Ideas (/gifts)** - Romantic gift suggestions
- **About (/about)** - Learn more about Valentine Glow
- **Developer (/developer)** - Credits and developer information

## 🌟 Romantic Features to Explore

### Animated Elements

- Floating hearts in backgrounds
- Pulsing heart icons
- Shimmer text effects
- Smooth transitions and hover states

### Color Gradients

- Romantic pink-to-red gradients
- Soft blush tones
- Deep romantic accents

### Typography

- Elegant serif fonts for headings
- Playful script fonts for special text
- Clean sans-serif for body content

### Responsive Design

- Mobile-first approach
- Tablet-optimized layouts
- Desktop-perfect experience

## 🤝 Contributing

Love to contribute? We'd love your help making Valentine Glow even more lovable!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/romantic-feature`)
3. Commit your changes (`git commit -m 'Add romantic feature'`)
4. Push to the branch (`git push origin feature/romantic-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

- Follow the existing code style and patterns
- Use TypeScript for type safety
- Keep components reusable and focused
- Test your changes with `npm run test`
- Ensure responsive design works on all screen sizes
- Add romantic touches, but maintain accessibility

## 🐛 Troubleshooting

### Port Already in Use

```sh
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
npm run dev
```

### Dependencies Not Installing

```sh
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working

- Make sure you're in the project root directory
- Check that `npm run dev` is running
- Try clearing browser cache (Ctrl/Cmd + Shift + R)

## 💝 Spread Love

Valentine Glow is all about celebrating love. Share your love story, cherish your memories, and remember:

> _"Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres."_

## 📝 License

This project is open source and available under the MIT License.

## ❤️ Credits

Created with love for all the beautiful love stories out there.

- Designed with ❤️
- Built with React & Vite
- Styled with Tailwind CSS
- Icons by Lucide React
- Components from Shadcn UI

---

**Made with 💕 for Valentine's Day and Every Day After**

_Join us in celebrating the most romantic day of the year, every day!_

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
