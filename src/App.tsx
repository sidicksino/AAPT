import React from 'react';
import { HashRouter as Router, useRoutes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Donate from './pages/Donate';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';
import AdminLayout from './components/admin/AdminLayout';
import DashboardHome from './pages/admin/dashboard/Home';
import NewsManagement from './pages/admin/dashboard/NewsManagement';
import GalleryManagement from './pages/admin/dashboard/GalleryManagement';
import UserManagement from './pages/admin/dashboard/UserManagement';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <Layout><Home /></Layout> },
    { path: "/about", element: <Layout><About /></Layout> },
    { path: "/actions", element: <Layout><Actions /></Layout> },
    { path: "/donate", element: <Layout><Donate /></Layout> },
    { path: "/news", element: <Layout><News /></Layout> },
    { path: "/gallery", element: <Layout><Gallery /></Layout> },
    { path: "/contact", element: <Layout><Contact /></Layout> },
    
    { path: "/admin/login", element: <Login /> },
    { path: "/admin/signup", element: <Signup /> },
    { 
      path: "/admin", 
      element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
      children: [
        { index: true, element: <Navigate to="dashboard" replace /> },
        { path: "dashboard", element: <DashboardHome /> },
        { path: "news", element: <NewsManagement /> },
        { path: "gallery", element: <GalleryManagement /> },
        { path: "users", element: <UserManagement /> },
      ]
    },
    
    { path: "*", element: <Navigate to="/" replace /> }
  ]);
  
  return element;
};

// Removed inline AdminDashboard component as it's replaced by the route above

const App: React.FC = () => {
  React.useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);

      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.src = '/assets/images/facebook/logo.png';
      img.onload = () => {
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, 2 * Math.PI);
        ctx.clip();
        
        ctx.drawImage(img, 4, 4, 56, 56);
        
        link.href = canvas.toDataURL('image/png');
      };
    };
    
    updateFavicon();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;