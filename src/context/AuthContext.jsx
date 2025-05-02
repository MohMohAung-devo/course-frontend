import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenicated] = useState(
    !!localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          authService.setAuthToken(token);
          await loadUser();
        } catch (err) {
          console.error("Authentication check failed:", err);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [token]);

  const loadUser = async () => {
    try {
      const userData = await authService.loadUser();
      setUser(userData);
      setIsAuthenicated(true);
      localStorage.setItem("user", JSON.stringify(userData));
      setError(null);
      return true;
    } catch (error) {
      console.error("Failed to load user:", error);

      logout();

      return false;
    }
  };

  const register = async (formData) => {
    try {
      setLoading(true);
      const response = await authService.register(formData);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      await loadUser();
      navigate("/");
      return { success: true };
    } catch (error) {
      console.error("Registration failed:", error);
      setError(error.message || "Registration failed");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const login = async (formData) => {
    try {
      setLoading(true);
      const response = await authService.login(formData);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      setToken(response.token);
      authService.setAuthToken(response.token);
      await loadUser();
      navigate("/", { replace: true });
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      setIsAuthenicated(false);
      authService.setAuthToken(null);
      setError(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setError("Failed to logout properly");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        register,
        login,
        logout,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
