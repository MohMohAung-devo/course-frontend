import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/Auth/PrivateRoute";
import Classes from "./pages/Classes/Classes";
import Instructor from "./pages/Instructor/Instructor";
import Cart from "./pages/Cart/Cart";

const Home = lazy(() => import("./pages/Home/Home"));
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
              <Route path="/instructors" element={<Instructor />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/profile/cart" element={<Cart />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
