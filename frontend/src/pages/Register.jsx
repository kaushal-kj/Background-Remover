import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister } = useContext(AppContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    handleRegister(
      form,
      (data) => {
        setSuccess("Registration successful! Redirecting...");
        setLoading(false);
        setTimeout(() => navigate("/login"), 1500);
      },
      (errMsg) => {
        setError(errMsg);
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full min-h-full sm:py-0 md:py-0 lg:py-0 2xl:py-5 py-4 flex items-center justify-center  px-2">
      <div className="w-full max-w-sm sm:max-w-md mx-auto mt-6 p-5 sm:p-7 bg-white rounded-2xl shadow-lg border border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-8 tracking-wide">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base sm:text-lg"
            />
          </div>
          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base sm:text-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-base sm:text-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition text-base sm:text-lg ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-center mt-4">{success}</div>
          )}
        </form>
        <div className="mt-8 text-center text-gray-700 text-base sm:text-lg">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;