// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('User registered:', res.data);
    } catch (err) {
      console.error('Registration failed:', err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange}
               className="w-full mb-2 p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange}
               className="w-full mb-2 p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange}
               className="w-full mb-4 p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
