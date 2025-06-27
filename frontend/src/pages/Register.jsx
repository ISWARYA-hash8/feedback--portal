// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { User, Mail, Lock } from 'lucide-react';
import registerImage from '/assets/login-amico.png'; // your uploaded image

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
      console.error('Registration failed:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 p-4 w-1/2">
          <img src={registerImage} alt="Register Illustration" className="max-w-full h-auto" />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center p-8 w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="flex items-center border rounded mb-4 p-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border rounded mb-4 p-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border rounded mb-6 p-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
