import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedbacks');
      setFeedbacks(res.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const resolveFeedback = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/feedbacks/${id}/resolve`);
      fetchFeedbacks(); // Refresh after update
    } catch (error) {
      console.error('Error resolving feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <section id="admin-feedback" className="mb-8 p-6 bg-white shadow rounded">
      <h3 className="text-xl font-bold mb-4">Student Feedback</h3>
      {feedbacks.length > 0 ? (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb._id} className="border-t">
                <td className="px-4 py-2">{fb.name}</td>
                <td className="px-4 py-2">{fb.email}</td>
                <td className="px-4 py-2">{fb.message}</td>
                <td className="px-4 py-2">{fb.status}</td>
                <td className="px-4 py-2">
                  {fb.status !== 'resolved' && (
                    <button
                      onClick={() => resolveFeedback(fb._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Mark as Resolved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback available.</p>
      )}
    </section>
  );
};

export default MyFeedback;
