import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Admin Subpages
import AllFeedback from "./components/AllFeedback";
import ResolvedFeedback from "./components/ResolvedFeedback";
import Announcements from "./components/Announcements";
import Resources from "./components/Resources";
import StudentManagement from "./components/StudentManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Dashboard with nested routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="all-feedback" element={<AllFeedback />} />
          <Route path="resolved-feedback" element={<ResolvedFeedback />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="resources" element={<Resources />} />
          <Route path="students" element={<StudentManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
