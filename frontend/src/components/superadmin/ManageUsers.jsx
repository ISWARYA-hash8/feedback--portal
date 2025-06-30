import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/superadmin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (id, newRole) => {
    const token = localStorage.getItem("token");
    await axios.put(
      `/api/superadmin/users/${id}/role`,
      { role: newRole },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setUsers(prev =>
      prev.map(u => (u._id === id ? { ...u, role: newRole } : u))
    );
  };

  const toggleStatus = async (id, status) => {
    const token = localStorage.getItem("token");
    await axios.put(
      `/api/superadmin/users/${id}/status`,
      { status: !status },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setUsers(prev =>
      prev.map(u => (u._id === id ? { ...u, status: !status } : u))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={e => handleRoleChange(user._id, e.target.value)}
                  className="border rounded px-2"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </td>
              <td>{user.status ? "Active" : "Disabled"}</td>
              <td>
                <button
                  onClick={() => toggleStatus(user._id, user.status)}
                  className={`px-2 py-1 rounded ${
                    user.status ? "bg-red-500" : "bg-green-500"
                  } text-white`}
                >
                  {user.status ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
