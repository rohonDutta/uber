import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserContext from './context/UserContext'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User-login" element={<UserLogin />} />
        <Route path="/User-signup" element={<UserSignup />} />
        <Route path="/Captain-login" element={<Captainlogin />} />
        <Route path="/Captain-signup" element={<CaptainSignup />} />
        
        
      </Routes>
    </div>
  );
};

export default App;


