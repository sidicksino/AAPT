import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Users, Eye, TrendingUp } from 'lucide-react';
import { articlesData } from '../../../data/newsData';
import { supabase } from '../../../lib/supabase';

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color: string;
}> = ({ title, value, icon, trend, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-[${color.replace('bg-', 'text-')}]`}>
        {icon}
      </div>
      {trend && (
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
          <TrendingUp size={12} />
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
    <div className="text-2xl font-black text-gray-900">{value}</div>
  </div>
);

const DashboardHome: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = React.useState({
    totalArticles: 0,
    totalViews: "12.5K",
    activeUsers: 1
  });

  React.useEffect(() => {
    // Fetch real stats
    const fetchStats = async () => {
        const { count } = await supabase.from('news').select('*', { count: 'exact', head: true });
        setStats(prev => ({ ...prev, totalArticles: count || 0 }));
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      title: t('admin.dashboard.stats.total_articles'),
      value: stats.totalArticles,
      icon: <FileText size={24} className="text-blue-500" />,
      color: "bg-blue-500",
      trend: "+2 this month"
    },
    {
      title: t('admin.dashboard.stats.total_views'),
      value: stats.totalViews,
      icon: <Eye size={24} className="text-purple-500" />,
      color: "bg-purple-500",
      trend: "+15%"
    },
    {
      title: t('admin.dashboard.stats.active_users'),
      value: stats.activeUsers,
      icon: <Users size={24} className="text-green-500" />,
      color: "bg-green-500",
      trend: "Online"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t('admin.dashboard.welcome')}</h1>
        <p className="text-gray-500 mt-1">{t('admin.dashboard.desc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Recent Activity Section Placeholder */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{t('admin.dashboard.recent_activity')}</h2>
        <div className="text-gray-400 text-center py-8 text-sm">
          No recent activity to show.
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
