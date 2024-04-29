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
import ShowFeeback from "./pages/dashboard/feedback/ShowFeeback";
import Allpayment from "./pages/dashboard/payment/Allpayment";
import PayementDetails from "./pages/dashboard/payment/PayementDetails";
import Addemp from "./pages/dashboard/employee/Addemp";
import Empmanage from "./pages/dashboard/employee/Empmanage";
import AllCustomize from "./pages/dashboard/customizePAck/AllCustomize";
import ProtectRoter from "./context/ProtectRoter";
import ProtectRouter from "./context/ProtectRoter";
import SelectPackage from "./pages/SelectPackage";
import Vehiclemanagement from "./pages/dashboard/vehicle/Vehiclemanagement";
import Packagemanagment from "./pages/dashboard/packages/Packagemanagment";
import Leave from "./components/Leave";
import Leavemanagment from "./pages/dashboard/driver/Leavemanagment";

import Userlog from "./pages/dashboard/employee/Userlog";

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
            path="/selectpackage"
            element={
              <Layout>
                <SelectPackage />
              </Layout>
            }
          />
          <Route
            path="/packages/:name"
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
              <ProtectRouter>
                <Layout>
                  <CustommizePackage />
                </Layout>
              </ProtectRouter>
            }
          />
          <Route
            path="/allDetails"
            element={
              <Dashboard>
                <AllCustomize />
              </Dashboard>
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
            path="/leave"
            element={
              <Dashboard>
                <Leavemanagment/>
              </Dashboard>
            }
          />
          <Route
            path="/driver-edit/:id"
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
            path="/vehicle-edit/:id"
            element={
              <Dashboard>
                <Addvehicle />
              </Dashboard>
            }
          />
           <Route
            path="/vehicleAll"
            element={
              <Dashboard>
                <Vehiclemanagement/>
              </Dashboard>
            }
          />
          <Route
            path="/alldriver"
            element={
              <Dashboard>
                <DriverManagement />
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
            path="/log"
            element={
              <Dashboard>
                <Userlog/>
              </Dashboard>
            }
          />
          <Route
            path="/dashPackage"
            element={
              <Dashboard>
                <PackageAddForm />
              </Dashboard>
            }
          />
             <Route
            path="/allPackage"
            element={
              <Dashboard>
                <Packagemanagment/>
              </Dashboard>
            }
          />
            <Route
            path="/editpack/:id"
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
            path="/user-leave"
            element={
              <Layout>
                <Leave/>
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
                <Fedback />
              </Layout>
            }
          />
          <Route
            path="/feedback-form"
            element={
              <Layout>
                <FeedbackFrom />
              </Layout>
            }
          />
          <Route
            path="/getfeedback"
            element={
              <Dashboard>
                <ShowFeeback />
              </Dashboard>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectRoter>
              <Layout>
                <Payment />
              </Layout>

              </ProtectRoter>
            }
          />
          <Route
            path="/allpay"
            element={
              <Dashboard>
                <Allpayment />
              </Dashboard>
            }
          />
          <Route
            path="/payment-details/:id"
            element={
              <Dashboard>
                <PayementDetails />
              </Dashboard>
            }
          />
          <Route
            path="/employeeAdd"
            element={
              <Dashboard>
                <Addemp />
              </Dashboard>
            }
          />

          <Route
            path="/empManage"
            element={
              <Dashboard>
                <Empmanage />
              </Dashboard>
            }
          />
          <Route
            path="/empEdit-edit/:id"
            element={
              <Dashboard>
                <Addemp />
              </Dashboard>
            }
          />
          {/* <Route path="/verify" element={<Verify/>}/> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
