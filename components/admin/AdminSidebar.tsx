
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Image, 
  Settings, 
  LogOut,
  FolderOpen
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = () => {
  const { signOut } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/admin' },
    { icon: FolderOpen, label: 'Projects', to: '/admin/projects' },
    { icon: FileText, label: 'Articles', to: '/admin/articles' },
    { icon: Users, label: 'Team', to: '/admin/team' },
    { icon: Image, label: 'Gallery', to: '/admin/gallery' },
    { icon: Settings, label: 'Settings', to: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-[#0d1b12] text-white min-h-screen flex flex-col fixed left-0 top-0 z-50">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#0d1b12] font-black">
          A
        </div>
        <span className="font-bold text-lg tracking-wide">AAPT Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-primary text-[#0d1b12] font-bold shadow-[0_0_15px_rgba(57,224,121,0.3)]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`
            }
            end={item.to === '/admin'}
          >
            <item.icon size={20} className="shrink-0" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => signOut()}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
