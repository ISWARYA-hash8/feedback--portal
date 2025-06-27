import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import loginImage from "/assets/login-amico.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token & user to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Navigate to user or admin dashboard
        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        setError(data.msg || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
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

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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
            disabled={loading}
            className={`bg-purple-500 text-white py-2 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
