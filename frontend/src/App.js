import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

import FreelancerDashboard from "./components/FreelancerComponents/FreelancerDashboard";
import FreelancerServices from "./components/FreelancerComponents/FreelancerServices";
import FreelancerCreateService from "./components/FreelancerComponents/FreelancerCreateService";
import FreelancerManageServices from "./components/FreelancerComponents/FreelancerManageServices";
import FreelancerUpdateService from "./components/FreelancerComponents/FreelancerUpdateService";
import ServiceDetails from "./components/ServiceDetails";

import ClientDashboard from "./components/ClientComponents/ClientDashboard";
import ClientFreelancers from "./components/ClientComponents/ClientFreelancers";
import ClientOrders from "./components/ClientComponents/ClientOrders";

import React, { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = localStorage.getItem("introShown");
    if (!introShown) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroFinish = () => {
    localStorage.setItem("introShown", "true");
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}
      {!showIntro && (
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/freelancer/:id" element={<FreelancerDashboard />}>
              <Route index element={<FreelancerDashboard />} />
              <Route path="services">
                <Route index element={<FreelancerServices />} />
                <Route path="create" element={<FreelancerCreateService />} />
                <Route path="manage" element={<FreelancerManageServices />} />
                <Route path="update/:serviceId" element={<FreelancerUpdateService />} />
                <Route path="show/:serviceId" element={<ServiceDetails type="1" />} />
              </Route>
              <Route path="chat" element={<Chat type="freelancer" />} />
              <Route path="profile" element={<Profile type="1" />} />
            </Route>
            <Route path="/dashboard/client/:id" element={<ClientDashboard />}>
              <Route index element={<ClientDashboard />} />
              <Route path="services" element={<ClientFreelancers />} />
              <Route path="services/show/:serviceId" element={<ServiceDetails type="2" />} />
              <Route path="orders" element={<ClientOrders />} />
              <Route path="order/show/:serviceId" element={<ServiceDetails type="3" />} />
              <Route path="chat" element={<Chat type="2" />} />
              <Route path="profile" element={<Profile type="2" />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
