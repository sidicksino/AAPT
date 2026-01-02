import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Nos actions', path: '/actions' },
  { label: 'Actualités', path: '/news' },
  { label: 'Galerie', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e7f3eb] bg-[#f8fcf9]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
            <HeartHandshake size={24} />
          </div>
          <h2 className="text-xl font-black tracking-tight text-text-main">AAPT</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6 lg:gap-9">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-bold' : 'text-gray-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <button 
            onClick={() => navigate('/donate')}
            className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-[#0d1b12] shadow-sm hover:bg-primary-hover transition-colors"
          >
            Faire un don
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0d1b12] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-2 ${
                  isActive ? 'text-primary font-bold' : 'text-gray-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button 
            onClick={() => {
              navigate('/donate');
              setIsOpen(false);
            }}
            className="w-full h-12 flex items-center justify-center rounded-lg bg-primary text-[#0d1b12] font-bold"
          >
            Faire un don
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;