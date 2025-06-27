import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaComments,
  FaClipboardList,
  FaBullhorn,
  FaUserCircle,
  FaBook,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-purple-700 text-white flex flex-col p-5 space-y-6">
      <h1 className="text-2xl font-bold text-center">Student Portal</h1>
      <nav className="flex flex-col gap-4">
        <Link to="give-feedback" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
          <FaComments /> Give Feedback
        </Link>
        <Link to="my-feedback" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
          <FaClipboardList /> My Feedback
        </Link>
        <Link to="announcements" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
          <FaBullhorn /> Announcements
        </Link>
        <Link to="resources" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
          <FaBook /> Resources
        </Link>
        <Link to="profile" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
          <FaUserCircle /> Profile
        </Link>
        <Link to="/" className="flex items-center gap-3 hover:bg-red-600 p-2 rounded mt-auto">
          <FaSignOutAlt /> Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
