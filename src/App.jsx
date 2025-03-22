import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ui/ForgotPassword.jsx";
import Login from "./components/ui/Login.jsx";
// import Search from "./components/ui/Search.jsx";
import SideBar from "./components/ui/SideBar.jsx";
import Navbar from "./components/Navbar.jsx";
import LogoutOnBack from "./components/ui/LogoutOnBack.jsx";
//import Test from "./components/ui/Test.jsx";
//import AccountProfile from "./components/ui/AccountProfile.jsx";

export default function App() {
  return (
    <Router style={{ marginLeft: "-30rem" }} className="text-3xl font-bold">
      <Routes className="w-full flex overflow-scroll scrollbar-hide">
        <Route path="/" element={<Login />} />

        <Route path="/forgot" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <div
              style={{ width: "89.5rem", marginTop: "-1.4rem" }}
              className="overflow-scroll scrollbar-hide"
              id="dashboard"
            >
              <LogoutOnBack />
              <Navbar />
              <div className="w-full h-[88vh] flex overflow-scroll scrollbar-hide">
                <SideBar />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
