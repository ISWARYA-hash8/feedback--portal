import React from 'react';

const GiveFeedback = () => {
  return (
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
  );
};

export default GiveFeedback;
