import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import loginImage from "/assets/login-amico.png"; 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left side image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={loginImage}
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {/* Email Field */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
            <Mail className="text-gray-400 mr-2" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
            <Lock className="text-gray-400 mr-2" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="text-gray-400 ml-2" size={20} />
              ) : (
                <Eye className="text-gray-400 ml-2" size={20} />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
