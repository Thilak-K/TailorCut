import React from "react";
import Home from "./components/Home";
import Logo from "./User/Pages/logo";
import Help from "./User/Pages/help";
import Cart from "./User/Pages/cart";
import Shops from "./User/Pages/shops";
import Frontpage from "./User/frontpage";
import Profile from "./User/Pages/profile";
import Sigin from "./components/Form/Sigin";
import Settings from "./User/Pages/settings";
import Signup from "./components/Form/Signup";
import DemoRequest from "./components/Form/demo";
import Myorders from "./User/Pages/measurements";
import Bregister from "./components/Form/Bregister";
import Measurments from "./User/Pages/measurements";
import Notification from "./User/Pages/notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="logo" element={<Logo />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shops" element={<Shops />} />
        <Route path="signin" element={<Sigin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="myorders" element={<Myorders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="bregister" element={<Bregister />} />
        <Route path="frontpage" element={<Frontpage />} />
        <Route path="demorequest" element={<DemoRequest />} />
        <Route path="measurements" element={<Measurments />} />
        <Route path="notification" element={<Notification />} />
      </Routes>
    </Router>
  );
};
export default Routers;
