import React from "react";
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

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<><Header/><Home /><Feature /><GetStart /><Footer/></>} />
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
      </Routes>

   
    </>
  );
}

export default App;