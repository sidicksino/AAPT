import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.actions'), path: '/actions' },
    { label: t('nav.news'), path: '/news' },
    { label: t('nav.gallery'), path: '/gallery' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e7f3eb] bg-[#f8fcf9]/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
            <HeartHandshake size={24} />
          </div>
          <h2 className="text-xl font-black tracking-tight text-text-main">AAPT</h2>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <div className="flex items-center gap-6 lg:gap-8 mr-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    isActive ? 'text-primary font-bold' : 'text-gray-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(57,224,121,0.5)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <motion.button 
              onClick={() => navigate('/donate')}
              whileHover={{ scale: 1.05, backgroundColor: "#0fd451", boxShadow: "0px 5px 15px rgba(57, 224, 121, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-[#0d1b12] shadow-sm transition-colors"
            >
              {t('nav.donate')}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0d1b12] p-2"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

        {/* Mobile Nav */}
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-b border-gray-100 bg-white shadow-lg"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive ? 'bg-primary/10 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  navigate('/donate');
                  setIsOpen(false);
                }}
                className="mt-2 w-full h-12 flex items-center justify-center rounded-lg bg-primary text-[#0d1b12] font-bold active:scale-95 transition-transform"
              >
                {t('nav.donate')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;