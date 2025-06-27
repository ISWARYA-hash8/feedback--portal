import React, { useState } from 'react';

const Announcements = () => {
  const [announcement, setAnnouncement] = useState('');

  const handlePost = () => {
    if (announcement) {
      alert('Announcement posted!');
      setAnnouncement('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Post Announcements</h2>
      <textarea
        className="w-full p-4 h-24 border rounded focus:outline-purple-500"
        placeholder="Enter your announcement here..."
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
      />
      <button onClick={handlePost} className="mt-3 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
        Post
      </button>
    </div>
  );
};

export default Announcements;
