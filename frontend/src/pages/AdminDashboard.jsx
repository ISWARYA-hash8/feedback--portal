import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import { FaUserCircle } from 'react-icons/fa';
import AllFeedback from '../components/admin/AllFeedback';
const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">
        
      <h2 className='flex items-center gap-3 p-2 rounded font-extrabold' ><FaUserCircle/>Welcome Admin!!</h2>
      
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
