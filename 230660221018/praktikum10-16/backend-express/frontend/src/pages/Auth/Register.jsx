import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // tetap pakai login otomatis
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { login } = useContext(AuthContext); // login otomatis setelah register
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Request register ke backend
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Register failed");
      }

      // Login otomatis setelah register
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Dekorasi abstrak */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        top: "-50px",
        left: "-50px"
      }} />
      <div style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.05)",
        bottom: "-50px",
        right: "-50px"
      }} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "450px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          color: "#fff",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Logo */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "28px",
            color: "white",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}>
            User
          </div>
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Register</h2>

        {error && (
          <div style={{
            background: "rgba(255,0,0,0.2)",
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "15px",
            textAlign: "center",
            color: "#fff"
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <FaUser style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(255,255,255,0.7)"
            }} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 35px",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff"
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <FaEnvelope style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(255,255,255,0.7)"
            }} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 35px",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff"
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "25px", position: "relative" }}>
            <FaLock style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(255,255,255,0.7)"
            }} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 40px 12px 35px",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff"
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "rgba(255,255,255,0.7)"
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "bold",
              fontSize: "16px",
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#ffeb3b", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
