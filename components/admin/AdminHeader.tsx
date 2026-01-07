
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, User } from 'lucide-react';

const AdminHeader = () => {
    const { user } = useAuth();

    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 ml-64 sticky top-0 z-40">
            <h1 className="text-2xl font-bold text-[#0d1b12]">Dashboard</h1>
            
            <div className="flex items-center gap-6">
                <button className="relative text-gray-400 hover:text-primary transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                
                <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-[#0d1b12]">{user?.email?.split('@')[0]}</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                    <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
