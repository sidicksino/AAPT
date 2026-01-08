import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Newspaper, 
  Image as ImageIcon, 
  Users, 
  LogOut,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout: React.FC = () => {
  const { t } = useTranslation();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: t('admin.nav.dashboard') },
    { path: '/admin/news', icon: <Newspaper size={20} />, label: t('admin.nav.news') },
    { path: '/admin/gallery', icon: <ImageIcon size={20} />, label: t('admin.nav.gallery') },
    { path: '/admin/users', icon: <Users size={20} />, label: t('admin.nav.users') },
  ];

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    desktop: { x: 0, opacity: 1, transition: { duration: 0 } } // Always open on desktop
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex font-body">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={window.innerWidth >= 1024 ? "desktop" : (isSidebarOpen ? "open" : "closed")}
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-[280px] bg-[#0d1b12] text-white
          shadow-2xl lg:shadow-none border-r border-white/5
          flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="p-8 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="relative">
                 <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse"></div>
                 <img 
                    src="/assets/images/facebook/logo.png" 
                    alt="AAPT Logo" 
                    className="w-10 h-10 rounded-full border-2 border-primary relative z-10" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                 />
             </div>
             <div>
                <div className="font-black text-xl tracking-tight leading-none">AAPT<span className="text-primary">.Admin</span></div>
                <div className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-1">Dashboard</div>
             </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `
                relative group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-primary/20 to-transparent text-white font-bold' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <span className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-white'}`}>
                      {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                      />
                  )}
                  {isActive && <ChevronRight size={16} className="text-primary opacity-50" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Footer */}
        <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="flex items-center gap-3 mb-4 px-2">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-green-800 flex items-center justify-center font-bold text-white shadow-lg">
                    A
                 </div>
                 <div className="flex-1 min-w-0">
                     <p className="text-sm font-bold text-white truncate">Admin User</p>
                     <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                     </p>
                 </div>
            </div>
            
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded-lg transition-all text-sm font-medium border border-white/5 hover:border-red-500/20"
          >
            <LogOut size={16} />
            <span>{t('admin.nav.logout')}</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 overflow-hidden">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-bold text-gray-800 hidden lg:block">
                  {/* Dynamic Title Idea: {navItems.find(i => i.path === location.pathname)?.label} */}
                  Dashboard
              </h1>
          </div>

          <div className="flex items-center gap-4">
             {/* We can add notifications or lang switcher here later */}
             <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
             <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">v1.0.0</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto bg-gray-50/50 scroll-smooth">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
             <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
