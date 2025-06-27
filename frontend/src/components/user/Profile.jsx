import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <h3 className="text-xl font-bold mb-2">My Profile</h3>
      <div className="bg-white p-4 shadow rounded">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Roll Number:</strong> 21EC1001</p>
        <p><strong>Department:</strong> ECE</p>
        <p><strong>Email:</strong> johndoe@university.edu</p>
      </div>
    </section>
  );
};

export default Profile;
