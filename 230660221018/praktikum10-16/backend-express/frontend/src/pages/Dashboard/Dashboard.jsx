import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { API_URL } from "../../api/config";
import { Modal, Button, Table, Card, Spinner } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // Fetch users
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    setEditUserId(null);
    setFormData({ name: "", email: "", password: "" });
    setShowModal(true);
  };

  const handleEditUser = (u) => {
    setEditUserId(u.id);
    setFormData({ name: u.name, email: u.email, password: "" });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (editUserId) {
        await axios.put(`${API_URL}/admin/users/${editUserId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${API_URL}/admin/users`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchUsers();
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure want to delete this user?")) return;
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${API_URL}/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="container-fluid p-4" style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome, {user?.name}
        </motion.h2>
        <Button
          onClick={logout}
          className="fw-bold"
          style={{
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            border: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          Logout
        </Button>
      </div>

      {/* Stats & Add User */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-3 flex-fill text-center"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h5>Total Users</h5>
          <h3>{users.length}</h3>
        </motion.div>

        <Button
          onClick={handleAddUser}
          className="d-flex align-items-center gap-2 fw-bold"
          style={{
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          <FaPlus /> Add User
        </Button>
      </div>

      {/* Users Table */}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Card style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
          <Card.Body className="p-0">
            <Table striped hover responsive className="m-0">
              <thead style={{ background: "#667eea", color: "#fff" }}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {users.map((u) => (
                    <motion.tr
                      key={u.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td className="d-flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleEditUser(u)}
                          style={{ background: "#ffeb3b", border: "none", color: "#000" }}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDeleteUser(u.id)}
                          style={{ background: "#ff4c4c", border: "none" }}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal show d-block"
            style={{ background: "rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-dialog"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content p-3" style={{ borderRadius: "15px" }}>
                <div className="modal-header">
                  <h5 className="modal-title">{editUserId ? "Edit User" : "Add User"}</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required={!editUserId}
                      />
                      {editUserId && <small className="text-muted">Leave blank if you don't want to change password</small>}
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                      <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                      <Button type="submit" style={{ background: "linear-gradient(135deg, #ff7e5f, #feb47b)", border: "none" }}>
                        {editUserId ? "Update" : "Create"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
