import React from 'react';

const Announcements = () => {
  return (
    <section id="announcements" className="mb-8">
      <h3 className="text-xl font-bold mb-2">University Announcements</h3>
      <div className="bg-white p-4 shadow rounded">
        <ul className="list-disc list-inside">
          <li>Semester exams start on July 15.</li>
          <li>Library hours extended till 10 PM.</li>
        </ul>
      </div>
    </section>
  );
};

export default Announcements;
