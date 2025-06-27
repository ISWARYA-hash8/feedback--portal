import React from 'react';
import Sidebar from '../components/user/Sidebar';
import { Outlet } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // ✅ Missing import

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="flex items-center gap-3 p-2 rounded font-extrabold">
          <FaUserCircle /> Welcome Student!!
        </h2>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
