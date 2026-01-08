import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col font-body bg-background-light text-text-main selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
