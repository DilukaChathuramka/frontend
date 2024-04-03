import React, { useEffect, useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handlePurchaseClick = (id, name, price) => {
    const queryParams = new URLSearchParams({ id, name, price }).toString();
    // Navigate to the payment page
    navigate(`/payment?${queryParams}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/package/getpackage");
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="center-spinner">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div class="wrapper">
     
     {
      packages.filter(pkg=>pkg.vehicleType==='car').map((pkg)=>(
        <div class="table basic">
        <div class="price-section">
          <div class="price-area">
            <div class="inner-area">
              <span class="text">$</span>
              <span class="price">{pkg.price}</span>
            </div>
          </div>
        </div>
        <div class="package-name">{pkg.packagename}</div>
        <ul class="features">
          <li>
            <span class="list-name">Person Count: {pkg.Personcount}</span>
            <span class="icon check">
              <i class="fas fa-check"></i>
            </span>
          </li>
          <li>
            <span class="list-name">Distance : {pkg.distance}</span>
            <span class="icon check">
              <i class="fas fa-check"></i>
            </span>
          </li>
          <li>
            <span class="list-name">Duration : {pkg.duration}</span>
            <span class="icon cross">
              <i class="fas fa-times"></i>
            </span>
          </li>
          <li>
            <span class="list-name">Driver : {pkg.driver}</span>
            <span class="icon cross">
              <i class="fas fa-times"></i>
            </span>
          </li>
          <li>
            <span class="list-name">Condition: {pkg.condtion}</span>
            <span class="icon cross">
              <i class="fas fa-times"></i>
            </span>
          </li>
          
        </ul>
        <div class="btn">
        <button onClick={() => handlePurchaseClick(pkg._id,pkg.packagename, pkg.price)}>Purchase</button>
        </div>
      </div>
      ))
     }
       
      </div>
   
        <div class="wrapper">
       
       {
        packages.filter(pkg=>pkg.vehicleType==='van').map((pkg)=>(
          <div class="table basic">
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <span class="text">$</span>
                <span class="price">{pkg.price}</span>
              </div>
            </div>
          </div>
          <div class="package-name">{pkg.packagename}</div>
          <ul class="features">
            <li>
              <span class="list-name">Person Count: {pkg.Personcount}</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Distance : {pkg.distance}</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Duration : {pkg.duration}</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Driver : {pkg.driver}</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Condition: {pkg.condtion}</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
            
          </ul>
          <div class="btn">
            <button onClick={() => handlePurchaseClick(pkg._id,pkg.packagename, pkg.price)}>Purchase</button>
          </div>
        </div>
        ))
       }
         
        </div>
      </>
    
  );
}

export default Packages;
