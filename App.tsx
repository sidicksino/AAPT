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
  return (
    <Router>
      <div className="flex min-h-screen flex-col font-body bg-background-light text-text-main selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;