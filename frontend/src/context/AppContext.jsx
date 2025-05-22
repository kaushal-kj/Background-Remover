import { createContext, useState } from "react";
import App from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
// import { set } from "mongoose";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const [utoken, setutoken] = useState(Cookies.get("token") || "");
  const [userData, setUserData] = useState({});

  const backendUrl = "http://localhost:4000";
  const handleRegister = async (form, onSuccess, onError) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/users/register`,
        form,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setutoken(data.token);
        setUserData(data.user);
        Cookies.set("token", data.token, { expires: 7 });
        if (onSuccess) onSuccess(data);
      } else {
        if (onError) onError(data.message);
      }
    } catch (error) {
      if (onError)
        onError(error.response?.data?.message || "Registration failed");
    }
  };
  const handleLogin = async (form, onSuccess, onError) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/users/login`, form, {
        withCredentials: true,
      });
      if (data.success) {
        setutoken(data.token);
        setUserData(data.user);
        Cookies.set("token", data.token, { expires: 7 });
        if (onSuccess) onSuccess(data);
      } else {
        if (onError) onError(data.message);
      }
    } catch (error) {
      if (onError) onError(error.response?.data?.message || "Login failed");
    }
  };
  const removeBg = async (image) => {
    try {
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const formData = new FormData();
      image && formData.append("image", image);

      const token = Cookies.get("token");
      const { data } = await axios.post(
        `${backendUrl}/api/images/removeBg`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.success) {
        setResultImage(data.resultImage);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

   const fetchUser = async (token) => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/users/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      if (data.success) {
        setUserData(data.user);
      }
    } catch (err) {
      setUserData({});
      setutoken("");
      Cookies.remove("token");
    }
  };
   useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setutoken(token);
      fetchUser(token);
    }
  }, []);
  const value = {
    backendUrl,
    handleRegister,
    handleLogin,
    removeBg,
    setutoken,
    utoken,
    userData,
    setUserData,
    setResultImage,
    resultImage,
    image,
    setImage,
    fetchUser
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
