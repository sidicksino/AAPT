
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const Dashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <AdminSidebar />
            
            <main className="ml-64 p-8">
                <AdminHeader />
                
                <div className="mt-8">
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 min-h-[400px] flex flex-col items-center justify-center text-center">
                        <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-4xl">👋</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#0d1b12] mb-2">Welcome to the Admin Portal</h2>
                        <p className="text-gray-500 max-w-md">
                            Select an item from the sidebar to start managing your website's content.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
