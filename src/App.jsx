import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/common/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Login from "./pages/login";
import Register from "./pages/register";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { getCartItems } from "./store/actions/cartActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getCartItems(user.uid));
      }
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PrivateRoutes />}>
          <Route element={<Profile />} path="/profile" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </Router>
  );
}

export default App;
