import React from 'react';
import { HashRouter as Router, useRoutes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Donate from './pages/Donate';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  const element = useRoutes([
    { path: "/", element: <PageTransition><Home /></PageTransition> },
    { path: "/about", element: <PageTransition><About /></PageTransition> },
    { path: "/actions", element: <PageTransition><Actions /></PageTransition> },
    { path: "/donate", element: <PageTransition><Donate /></PageTransition> },
    { path: "/news", element: <PageTransition><News /></PageTransition> },
    { path: "/gallery", element: <PageTransition><Gallery /></PageTransition> },
    { path: "/contact", element: <PageTransition><Contact /></PageTransition> },
    
    { path: "/admin/login", element: <Login /> },
    { path: "/admin/signup", element: <Signup /> },
    { path: "/admin", element: 
      <ProtectedRoute>
        <div className="flex items-center justify-center min-h-[60vh] text-2xl font-bold text-[#0d1b12]">
          Admin Dashboard (Protected)
        </div>
      </ProtectedRoute> 
    },
    
    { path: "*", element: <Navigate to="/" replace /> }
  ]);
  
  if (!element) return null;

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);

      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.src = '/assets/images/facebook/logo.png';
      img.onload = () => {
        // Draw white circle background (acts as border)
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Draw slightly smaller white circle to ensure clean border (optional, but good for anti-aliasing)
        // Actually, just drawing the image smaller on top of the white circle creates the border effect
        
        // Clip to circle for the image
        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, 2 * Math.PI);
        ctx.clip();
        
        ctx.drawImage(img, 4, 4, 56, 56);
        
        link.href = canvas.toDataURL('image/png');
      };
    };
    
    updateFavicon();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="flex min-h-screen flex-col font-body bg-background-light text-text-main selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;