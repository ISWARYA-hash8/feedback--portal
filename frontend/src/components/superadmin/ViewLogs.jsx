import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/superadmin/logs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLogs(response.data);
    };
    fetchLogs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Activity Logs</h2>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2">User</th>
            <th>Action</th>
            <th>Timestamp</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{log.username}</td>
              <td>{log.action}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
