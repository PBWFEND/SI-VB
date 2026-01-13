import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // GET USER BY ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setName(res.data.data.name);
        setEmail(res.data.data.email);
      })
      .catch((err) => {
        console.log("GET USER ERROR:", err.response?.data || err.message);
      });
  }, [id, token]);

  // UPDATE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/api/admin/users/${id}`,
        {
          name,
          email,
          password: password || undefined,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 🔥 PAKSA PINDAH HALAMAN
      navigate("/users", { replace: true });

    } catch (err) {
      console.log("UPDATE ERROR:", err.response?.data || err.message);
      alert("Update gagal, cek console");
    }
  };

  return (
    <div>
      <h1>Edit User</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password (opsional)</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kosongkan jika tidak diubah"
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
