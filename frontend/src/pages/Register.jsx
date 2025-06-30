// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { User, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import registerImage from '/assets/login-amico.png';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMsg('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setMsg(res.data.msg || 'Registration successful!');
      setFormData({ name: '', email: '', password: '' });

      // Redirect to login after 1.5 seconds
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error("Registration Error:", err);
      res.status(500).json({ msg: "Registration failed", error: err.message });

    } finally {
      setLoading(false);
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

          {msg && <div className="text-green-600 text-sm text-center mb-2">{msg}</div>}
          {error && <div className="text-red-600 text-sm text-center mb-2">{error}</div>}

          <div className="flex items-center border rounded mb-4 p-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
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
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 text-white p-2 rounded transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/" className="text-purple-600 hover:underline">
              Login
            </a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
