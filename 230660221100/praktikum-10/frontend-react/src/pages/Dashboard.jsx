import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(response.data.data);
      } catch (error) {
        console.log("ERROR GET USERS:", error.response?.data);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <p>Status Login: {token ? "Sudah Login ✅" : "Belum Login ❌"}</p>

      <h3>Data User</h3>

      {loading && <p>Loading data user...</p>}

      {!loading &&
        users.map((user) => (
          <div key={user.id}>
            {user.name} - {user.email}
          </div>
        ))}

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
