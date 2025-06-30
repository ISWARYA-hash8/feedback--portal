import { useEffect, useState } from "react";
import axios from "axios";

export default function SystemStats() {
  const [stats, setStats] = useState({
    totalFeedbacks: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/superadmin/system-stats", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">System Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Feedbacks" value={stats.totalFeedbacks} />
        <StatCard title="Open" value={stats.open} />
        <StatCard title="In Progress" value={stats.inProgress} />
        <StatCard title="Resolved" value={stats.resolved} />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-blue-100 p-4 rounded shadow text-center">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
