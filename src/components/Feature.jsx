import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Feature() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/vehicle/allvehicle");
        setVehicles(response.data); // Assuming the response contains the array of vehicles
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle errors here, for example, by setting an error state
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <section class="section featured-car" id="featured-car">
        <div class="container">
          <div class="title-wrapper">
            <h2 class="h2 section-title">Featured cars</h2>

            <a href="#" class="featured-car-link">
              <span>View more</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </div>

          <ul class="featured-car-list">
            {vehicles.map((vehicle) => (
              <li key={vehicle._id}>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    {/* Replace with your dynamic image URL */}
                    <img
                      src={
                        vehicle.image
                          ? `http://localhost:5000/${vehicle.image.replace(
                              /\\/g,
                              "/"
                            )}`
                          : "imgae is loading"
                      }
                      alt={vehicle.vehicleName || "Default Vehicle Name"}
                      loading="lazy"
                      width="440"
                      height="300"
                      className="w-100"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        {vehicle.vehicleName}{" "}
                        <span
                          style={{ fontSize: "15px" }}
                          className="text-success"
                        >
                          <b>{vehicle.vehicletype}</b>
                        </span>
                      </h3>

                      {/* Additional vehicle details can be added here */}
                    </div>

                    <ul className="card-list">
                      {/* Dynamically add list items based on available data */}
                      <li className="card-list-item">
                        <ion-icon name="people-outline"></ion-icon>
                        <span className="card-item-text">
                          {vehicle.seatCapacity} People
                        </span>
                          
                      </li>

                      {/* Other list items... */}
                    </ul>

                    <div className="card-price-wrapper">
                      {/* Pricing and other actions */}
                      <p className="card-price">
                        <strong>$490</strong> / month{" "}
                        {/* Replace with dynamic pricing */}
                      </p>

                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline">{vehicle.condition}</ion-icon>
                      </button>

                      <button className="btn">Rent now</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Feature;
