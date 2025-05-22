import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import logo from "../assets/Remove_BG_Logo.png";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, setUserData, setutoken } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    setUserData({});
    setutoken("");
    Cookies.remove("token");
    setDropdown(false);
    navigate("/login");
  };

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <div className="flex justify-between items-center p-4 text-white">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="lg:w-52 w-36 cursor-pointer"
      />

      <div className="flex items-center relative">
        {userData && userData.username ? (
          <div className="relative">
            <button
              onClick={() => setDropdown((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1 text-xl rounded-md bg-blue-700 font-semibold hover:bg-blue-800 transition cursor-pointer focus:outline-none"
            >
              <span className="truncate max-w-[120px]">{userData.username}</span>
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-md shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-50 rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {isLoginPage ? (
              <button
                className="border-white px-3 py-1 text-xl rounded-md bg-gray-900 font-semibold hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            ) : isRegisterPage ? (
              <button
                className="border-white px-3 py-1 text-xl rounded-md bg-gray-900 font-semibold hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            ) : (
              <button
                className="border-white px-3 py-1 text-xl rounded-md bg-gray-900 font-semibold hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
