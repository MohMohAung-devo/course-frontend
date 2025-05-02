import axios from "axios";
const apiUrl = "http://localhost:3000/api/auth";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

const register = async (userData) => {
  const response = await axios.post(`${apiUrl}/register`, userData);

  return response.data;
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, userData);
    return {
      success: true,
      token: response.data.token,
      user: response.data.user,
    };
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

const loadUser = async () => {
  const response = await axios.get(`${apiUrl}/me`);
  return response.data.user;
};

export default { setAuthToken, register, login, loadUser };
