<<<<<<< HEAD
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import jwt_decode from 'jwt-decode';
import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
>>>>>>> f17e539c94fc254a5dfb6822221bb7e48512db69

import Navbar from "./components/Layout/Navbar";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Tours from "./pages/tours";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import { AuthContext } from "./app/auth";
import { getUserData } from "./services/auth";
import Success from "./pages/confirm";
import About from "./pages/about";
import logo from "./assets/image/logoS.png";
import UserProfile from "./pages/userProfile";

function App() {
  const user = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const jwt = localStorage.getItem("samagati_jwt");
      if (jwt != null) {
        const data = await getUserData(jwt);
        user.setValue({
          user: data,
        });
      }
    };
    checkAuth();

    setTimeout(() => {
      setLoading(false);
      // window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <>
      <div
        className="loadingContainer"
        style={{ display: loading ? "block" : "none" }}
      >
        <img src={logo} alt="Samagati" />
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:user" element={<Profile />} />
        <Route path="/booking/:tour" element={<Booking />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
