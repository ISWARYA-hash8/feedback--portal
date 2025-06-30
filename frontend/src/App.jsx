import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// User Dashboard & Subpages
import Dashboard from "./pages/Dashboard";
import GiveFeedback from "./components/user/GiveFeedback";
import MyFeedback from './components/user/MyFeedback';
import AnnouncementsUser from './components/user/Announcements';
import ResourcesUser from './components/user/Resources';
import Profile from './components/user/Profile';

// Admin Dashboard & Subpages
import AdminDashboard from "./pages/AdminDashboard";
import AllFeedback from "./components/admin/AllFeedback";
import ResolvedFeedback from "./components/admin/ResolvedFeedback";
import AnnouncementsAdmin from "./components/admin/Announcements";
import ResourcesAdmin from "./components/admin/Resources";
import StudentManagement from "./components/admin/StudentManagement";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import ManageUsers from "./components/superadmin/ManageUsers";
import ViewLogs from "./components/superadmin/ViewLogs";
import SystemStats from "./components/superadmin/SystemStats";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        {/* Student Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="give-feedback" element={<GiveFeedback />} />
          <Route path="my-feedback" element={<MyFeedback />} />
          <Route path="announcements" element={<AnnouncementsUser />} />
          <Route path="resources" element={<ResourcesUser />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Admin Dashboard with nested routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="all-feedback" element={<AllFeedback />} />
          <Route path="resolved-feedback" element={<ResolvedFeedback />} />
          <Route path="announcements" element={<AnnouncementsAdmin />} />
          <Route path="resources" element={<ResourcesAdmin />} />
          <Route path="students" element={<StudentManagement />} />
        </Route>
        <Route path="/superadmin" element={<SuperAdminDashboard />}>
          <Route path="users" element={<ManageUsers />} />
          <Route path="logs" element={<ViewLogs />} />
          <Route path="stats" element={<SystemStats />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
