import { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import axios from "axios";

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalFeedbacks: 0,
    resolvedFeedbacks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/superadmin/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching super admin stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Super Admin</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/superadmin/users"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/logs"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              View Logs
            </Link>
          </li>
          <li>
            <Link
              to="/superadmin/stats"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              System Stats
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Dashboard Summary</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Users" value={stats.totalUsers} color="blue" />
          <StatCard title="Active Users" value={stats.activeUsers} color="green" />
          <StatCard title="Total Feedbacks" value={stats.totalFeedbacks} color="yellow" />
          <StatCard title="Resolved Feedbacks" value={stats.resolvedFeedbacks} color="purple" />
        </div>

        <Outlet /> {/* Renders nested routes like /superadmin/users etc */}
      </main>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ title, value, color }) {
  return (
    <div className={`bg-${color}-100 p-4 rounded shadow text-center`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
