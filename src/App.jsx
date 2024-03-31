import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Header from "./components/Header";
import Feature from "./components/Feature";
import GetStart from "./components/GetStart";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import CustommizePackage from "./pages/CustommizePackage";
import Dashboard from "./pages/dashboard/Dashboard";

import Cards from "./pages/dashboard/Cards";
import DriverRegistration from "./pages/dashboard/driver/DriverRegistration";
import Addvehicle from "./pages/dashboard/vehicle/Addvehicle";
import UserDetails from "./pages/dashboard/user/UserDetails";
import UserProfile from "./components/UserProfile";
import Verify from "./pages/Verify";
import axios from "axios";
import { UserProvider } from "./context/UserContext";
import Fedback from "./pages/Fedback";
import PackageAddForm from "./pages/dashboard/packages/PackageAddForm";
import Payment from "./pages/Payment";
import FeedbackFrom from "./pages/FeedbackFrom";
import DriverManagement from "./pages/dashboard/driver/DriverManagement";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Feature />
                <GetStart />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages"
            element={
              <Layout>
                <Packages />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout>
                <Signin />
              </Layout>
            }
          />
          <Route
            path="/cutomizepackages"
            element={
              <Layout>
                <CustommizePackage />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard>
                <Cards />
              </Dashboard>
            }
          />
          <Route
            path="/driver-registration"
            element={
              <Dashboard>
                <DriverRegistration />
              </Dashboard>
            }
          />
          <Route
            path="/vehicle-add"
            element={
              <Dashboard>
                <Addvehicle />
              </Dashboard>
            }
          />
           <Route
            path="/allvehicle"
            element={
              <Dashboard>
                <DriverManagement/>
              </Dashboard>
            }
          />
          <Route
            path="/user-details"
            element={
              <Dashboard>
                <UserDetails />
              </Dashboard>
            }
          />
             <Route
            path="/dashPackage"
            element={
              <Dashboard>
                <PackageAddForm/>
              </Dashboard>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfile />
              </Layout>
            }
          />
          <Route
            path="/user/:id/verify/:token"
            element={
              <Layout>
                <Verify />
              </Layout>
            }
          />
            <Route
            path="/feedback"
            element={
              <Layout>
                <Fedback/>
              </Layout>
            }
          />
           <Route
            path="/feedback-form"
            element={
              <Layout>
                <FeedbackFrom/>
              </Layout>
            }
          />
             <Route
            path="/payment"
            element={
              <Layout>
                <Payment/>
              </Layout>
            }
          />
          {/* <Route path="/verify" element={<Verify/>}/> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
