# AAPT - Association Actions Pour Tous

An interactive, responsive web application for the AAPT non-profit organization, built with modern web technologies.

## 🛠 Tech Stack
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Vanilla CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend/Auth**: Supabase
- **Internationalization**: i18next

## 📂 Project Structure
After the 2026 Refactor, the project follows a standard `src/` directory structure:

```
src/
├── components/     # Reusable UI components (Navbar, Footer, etc.)
├── context/        # React Context (AuthContext)
├── lib/            # Utilities & Clients (Supabase client)
├── pages/          # Page views (Home, About, News, Admin...)
├── App.tsx         # Main Application Component & Routing
├── main.tsx        # Entry point
└── index.css       # Global styles & Tailwind directives
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Ensure you have a `.env.local` file with:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔐 Admin Access
The admin section is protected via Supabase Auth.
- Login Route: `/admin/login`
- Protected Routes: Wrapped in `<ProtectedRoute>` component.

## 🌍 Internationalization
Translations are stored in `public/locales/{lang}/translation.json`.
The app uses `i18next-browser-languagedetector` to automatically detect user language.
