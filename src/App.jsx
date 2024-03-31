
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
import Addvehicle from "./pages/dashboard/vehicle/Addvehicle.jsx";
import DriverManagement from "./pages/dashboard/driver/DriverManagement";
import DriverRegistration from "./pages/dashboard/driver/DriverRegistration";
import PackageAddForm from "./pages/dashboard/packages/PackageAddForm";
import Packages from "./pages/Packages";
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
            path="/allvehicle"
            element={
              <Dashboard>
                <DriverManagement/>
              </Dashboard>
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
      </Routes>

      </UserProvider>
    </>
  );
}

export default App;