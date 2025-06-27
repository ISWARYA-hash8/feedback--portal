import React from 'react';
import { FaComments, FaClipboardList, FaBullhorn, FaUserCircle, FaBook, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white flex flex-col p-5 space-y-6">
        <h1 className="text-2xl font-bold text-center">Student Portal</h1>
        <nav className="flex flex-col gap-4">
          <a href="#give-feedback" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
            <FaComments /> Give Feedback
          </a>
          <a href="#my-feedback" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
            <FaClipboardList /> My Feedback
          </a>
          <a href="#announcements" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
            <FaBullhorn /> Announcements
          </a>
          <a href="#resources" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
            <FaBook /> Resources
          </a>
          <a href="#profile" className="flex items-center gap-3 hover:bg-purple-600 p-2 rounded">
            <FaUserCircle /> Profile
          </a>
          <a href="#logout" className="flex items-center gap-3 hover:bg-red-600 p-2 rounded mt-auto">
            <FaSignOutAlt /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Welcome to the Feedback Portal 👋</h2>

        {/* Give Feedback Section */}
        <section id="give-feedback" className="mb-8">
          <h3 className="text-xl font-bold mb-2">Submit New Feedback</h3>
          <textarea
            className="w-full h-32 p-4 border rounded resize-none focus:outline-purple-500"
            placeholder="Write your feedback about classes, faculty, or campus here..."
          />
          <button className="mt-3 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Submit
          </button>
        </section>

        {/* View Feedback Section */}
        <section id="my-feedback" className="mb-8">
          <h3 className="text-xl font-bold mb-2">My Submitted Feedback</h3>
          <div className="bg-white p-4 shadow rounded">
            <p>No feedback submitted yet.</p>
          </div>
        </section>

        {/* Announcements */}
        <section id="announcements" className="mb-8">
          <h3 className="text-xl font-bold mb-2">University Announcements</h3>
          <div className="bg-white p-4 shadow rounded">
            <ul className="list-disc list-inside">
              <li>Semester exams start on July 15.</li>
              <li>Library hours extended till 10 PM.</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-8">
          <h3 className="text-xl font-bold mb-2">Student Resources</h3>
          <div className="bg-white p-4 shadow rounded space-y-2">
            <a href="#" className="text-purple-600 underline">Academic Calendar</a><br />
            <a href="#" className="text-purple-600 underline">Online Attendance</a><br />
            <a href="#" className="text-purple-600 underline">Contact Student Helpdesk</a>
          </div>
        </section>

        {/* Profile */}
        <section id="profile">
          <h3 className="text-xl font-bold mb-2">My Profile</h3>
          <div className="bg-white p-4 shadow rounded">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Roll Number:</strong> 21EC1001</p>
            <p><strong>Department:</strong> ECE</p>
            <p><strong>Email:</strong> johndoe@university.edu</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
