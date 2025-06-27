import React from 'react';
import {
  FaClipboardList,
  FaCheckCircle,
  FaBullhorn,
  FaBook,
  FaUsersCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 space-y-6">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <a href="#all-feedback" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
            <FaClipboardList /> All Feedback
          </a>
          <a href="#resolved-feedback" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
            <FaCheckCircle /> Resolved
          </a>
          <a href="#post-announcements" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
            <FaBullhorn /> Announcements
          </a>
          <a href="#resources" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
            <FaBook /> Resources
          </a>
          <a href="#students" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
            <FaUsersCog /> Students
          </a>
          <a href="#logout" className="flex items-center gap-3 hover:bg-red-600 p-2 rounded mt-auto">
            <FaSignOutAlt /> Logout
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Welcome Admin 🎓</h2>

        {/* All Feedback */}
        <section id="all-feedback" className="mb-8">
          <h3 className="text-xl font-bold mb-2">All Submitted Feedback</h3>
          <div className="bg-white shadow rounded p-4 space-y-3">
            <div className="border-b pb-2">
              <p><strong>Student:</strong> John Doe</p>
              <p><strong>Feedback:</strong> Classroom projectors are not working.</p>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Mark as Resolved
              </button>
            </div>
            <div className="border-b pb-2">
              <p><strong>Student:</strong> Jane Smith</p>
              <p><strong>Feedback:</strong> Need more placement training sessions.</p>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Mark as Resolved
              </button>
            </div>
          </div>
        </section>

        {/* Resolved Feedback */}
        <section id="resolved-feedback" className="mb-8">
          <h3 className="text-xl font-bold mb-2">Resolved Feedback</h3>
          <div className="bg-white p-4 rounded shadow">
            <p>No feedback resolved yet.</p>
          </div>
        </section>

        {/* Post Announcements */}
        <section id="post-announcements" className="mb-8">
          <h3 className="text-xl font-bold mb-2">Post a New Announcement</h3>
          <textarea
            className="w-full p-4 h-24 border rounded focus:outline-purple-500"
            placeholder="Enter your announcement here..."
          />
          <button className="mt-3 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
            Post
          </button>
        </section>

        {/* Manage Resources */}
        <section id="resources" className="mb-8">
          <h3 className="text-xl font-bold mb-2">Manage Resources</h3>
          <div className="bg-white p-4 rounded shadow space-y-2">
            <input type="text" placeholder="Add new resource link..." className="w-full p-2 border rounded" />
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
              Add Resource
            </button>
          </div>
        </section>

        {/* Manage Students */}
        <section id="students">
          <h3 className="text-xl font-bold mb-2">Student Management</h3>
          <div className="bg-white p-4 rounded shadow">
            <p>Total Registered Students: <strong>256</strong></p>
            <p>View or manage student profiles from backend panel.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
