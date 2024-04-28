
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import Header from "./components/Header";
import Feature from "./components/Feature";
import GetStart from "./components/GetStart";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Cards from "./pages/dashboard/Cards";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import axios from "axios";
import Verify from "./pages/Verify";
import { UserProvider } from "./context/UserContext";
import AllCustomize from "./pages/dashboard/customizePAck/AllCustomize";
import Addvehicle from "./pages/dashboard/vehicle/Addvehicle.jsx";
import DriverManagement from "./pages/dashboard/driver/DriverManagement";
import DriverRegistration from "./pages/dashboard/driver/DriverRegistration";
import PackageAddForm from "./pages/dashboard/packages/PackageAddForm";
import Packages from "./pages/Packages";
import Payment from "./pages/Payment";
import Allpayment from "./pages/dashboard/payment/Allpayment";
import PayementDetails from "./pages/dashboard/payment/PayementDetails";
import Fedback from "./pages/Fedback";
import FeedbackFrom from "./pages/FeedbackFrom";
import ShowFeeback from "./pages/dashboard/feedback/ShowFeeback";
import CustommizePackage from "./pages/CustommizePackage";
import Addemp from "./pages/dashboard/employee/Addemp";
import Empmanage from "./pages/dashboard/employee/Empmanage";
import UserDetails from "./pages/dashboard/user/UserDetails.jsx";
import UserProfile from "./components/UserProfile";
import ProtectRouter from "./context/ProtectRoter";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
<UserProvider>
      <Routes>
        <Route path="/" element={<><Header /><Home /><Feature /><GetStart /><Footer /></>} />
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <Cards />
            </Dashboard>
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
            path="/allDetails"
            element={
              <Dashboard>
                <AllCustomize />
              </Dashboard>
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
          path="/user/:id/verify/:token"
          element={
            <Layout>
              <Verify />
            </Layout>
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
          path="/vehicle-add"
          element={
            <Dashboard>
              <Addvehicle />
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
            path="/payment"
            element={
              <Layout>
                <Payment />
              </Layout>
            }
          />
           <Route
            path="/allpay"
            element={
              <Dashboard>
                <Allpayment/>
              </Dashboard>
            }
          />
           <Route
            path="/payment-details/:id"
            element={
              <Dashboard>
                <PayementDetails/>
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

path="/packages"

element={

  <Layout>

    <Packages />

  </Layout>

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
                <ShowFeeback/>
              </Dashboard>
            }
          />

<Route
            path="/employeeAdd"
            element={
              <Dashboard>
                <Addemp/>
              </Dashboard>
            }
          />
 
            <Route
            path="/empManage"
            element={
              <Dashboard>
                <Empmanage/>
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
            path="/empEdit-edit/:id"
            element={
              <Dashboard>
                 <Addemp/>
              </Dashboard>
            }
          />

      </Routes>

      </UserProvider>
    </>
  );
}

export default App;