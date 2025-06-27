const AllFeedback = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">All Feedback</h2>
    {/* Replace with map logic later */}
    <div className="bg-white p-4 shadow rounded">
      <p><strong>Student:</strong> John Doe</p>
      <p><strong>Feedback:</strong> Classroom projectors are not working.</p>
      <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">Mark as Resolved</button>
    </div>
  </div>
);
export default AllFeedback;
