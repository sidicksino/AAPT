import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Users, Eye, TrendingUp, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../../../lib/supabase';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color: string;
  index: number;
}> = ({ title, value, icon, trend, color, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-4 rounded-2xl ${color} bg-opacity-10 text-[${color.replace('bg-', 'text-')}] group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      {trend && (
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-1 border border-green-100">
          <TrendingUp size={12} />
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
    <div className="text-3xl font-black text-gray-900 tracking-tight">{value}</div>
  </motion.div>
);

const DashboardHome: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = React.useState({
    totalArticles: 0,
    totalViews: "12.5K", // Placeholder for now
    activeUsers: 1
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Fetch real stats
    const fetchStats = async () => {
        try {
            const { count } = await supabase.from('news').select('*', { count: 'exact', head: true });
            setStats(prev => ({ ...prev, totalArticles: count || 0 }));
        } catch(e) { console.error(e) } 
        finally { setLoading(false) }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      title: t('admin.dashboard.stats.total_articles'),
      value: loading ? "..." : stats.totalArticles,
      icon: <FileText size={24} className="text-blue-600" />,
      color: "bg-blue-600",
      trend: "+2 this month"
    },
    {
      title: t('admin.dashboard.stats.total_views'),
      value: stats.totalViews,
      icon: <Eye size={24} className="text-purple-600" />,
      color: "bg-purple-600",
      trend: "+15%"
    },
    {
      title: t('admin.dashboard.stats.active_users'),
      value: stats.activeUsers,
      icon: <Users size={24} className="text-green-600" />,
      color: "bg-green-600",
      trend: "Online Now"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">{t('admin.dashboard.welcome')}</h1>
          <p className="text-gray-500 mt-2 text-lg">{t('admin.dashboard.desc')}</p>
        </motion.div>
        
        <Link to="/admin/news" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform">
             {t('admin.dashboard.manage_content')} <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => (
          <StatCard key={idx} {...stat} index={idx} />
        ))}
      </div>

      {/* Recent Activity Section Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8 overflow-hidden relative"
      >
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Activity className="text-primary" size={20} />
                {t('admin.dashboard.recent_activity')}
            </h2>
             <button className="text-gray-400 hover:text-gray-600 text-sm font-medium">{t('admin.dashboard.view_all')}</button>
        </div>
        
        <div className="text-center py-12 relative z-10">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
               <Activity size={24} />
           </div>
           <p className="text-gray-500 font-medium">{t('admin.dashboard.no_activity')}</p>
           <p className="text-gray-400 text-sm mt-1">{t('admin.dashboard.activity_desc')}</p>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
