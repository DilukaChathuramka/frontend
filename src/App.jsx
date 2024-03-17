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

      </Routes>

   
    </>
  );
}

export default App;