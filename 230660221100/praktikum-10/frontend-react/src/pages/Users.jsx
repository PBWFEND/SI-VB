import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Users = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleDelete = (id) => {
  if (!confirm("Yakin mau hapus user ini?")) return;

  axios
    .delete(`http://localhost:3000/api/admin/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      // refresh list users TANPA reload page
      setUsers(users.filter((user) => user.id !== id));
    })
    .catch((err) => {
      console.log("ERROR DELETE USER:", err.response?.data);
    });
};


  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/users", {
        headers: {
  Authorization: `Bearer ${token}`,
},
      })
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ERROR GET USERS:", err.response?.data);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <p>Loading data user...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data Users</h1>
<Link to="/users/create">+ Tambah User</Link>

      <ul>
        {users.map((user) => (
  <li key={user.id}>
    {user.name} - {user.email}{" "}
    
    <Link to={`/users/edit/${user.id}`}>Edit</Link>{" "}
    
    <button
      onClick={() => handleDelete(user.id)}
      style={{ color: "red" }}
    >
      Delete
    </button>
  </li>
))}
      </ul>
    </div>
  );
};

export default Users;
