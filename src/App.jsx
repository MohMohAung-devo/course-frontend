import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./context/AuthContext";
// import Home from "./Home/Home";
import PrivateRoutes from "./components/Auth/PrivateRoute";

const Home = lazy(() => import("./Home/Home"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading.....</div>}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
