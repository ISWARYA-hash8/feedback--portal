import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaClipboardList, FaCheckCircle, FaBullhorn,
  FaBook, FaUsersCog, FaSignOutAlt
} from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-5 space-y-6 h-screen">
      <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        <NavLink to="/admin/all-feedback" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
          <FaClipboardList /> All Feedback
        </NavLink>
        <NavLink to="/admin/resolved-feedback" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
          <FaCheckCircle /> Resolved
        </NavLink>
        <NavLink to="/admin/announcements" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
          <FaBullhorn /> Announcements
        </NavLink>
        <NavLink to="/admin/resources" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
          <FaBook /> Resources
        </NavLink>
        <NavLink to="/admin/students" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
          <FaUsersCog /> Students
        </NavLink>
        <NavLink to="/" className="flex items-center gap-3 hover:bg-red-600 p-2 rounded mt-auto">
          <FaSignOutAlt /> Logout
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
