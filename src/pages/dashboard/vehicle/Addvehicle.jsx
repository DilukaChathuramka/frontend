import axios from "axios";
import React, { useState } from "react";

function Addvehicle() {
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [vehicledata, SetVehicleData] = useState({
    vehicleName: "",
    vehicleNo: "",
    initialKM: "",
    condition: "",
    vehicletype: "",
    seatCapacity: "",
    image: null,
  });
  const vehicleAdd = async (e) => {
    e.preventDefault();

    const {
      vehicleName,
      vehicleNo,
      initialKM,
      condition,
      vehicletype,
      seatCapacity,
    } = vehicledata;
    // console.log(username);
    const formData = new FormData();
    Object.keys(vehicledata).forEach((key) => {
      if (key !== "image") {
        formData.append(key, vehicledata[key]);
      }
      if (vehicledata.image) {
        formData.append("image", vehicledata.image);
      }
    });
    try {
      const response = await axios.post("/vehicle/addvehicle", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log("errr");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <h1 className="h3 mb-0 text-gray-800 mb-3">ADD Vehicle</h1>
          {message ? (
            <p className="alert alert-success">{message}</p>
          ) : errMsg ? (
            <p className="alert alert-danger">{errMsg}</p>
          ) : null}
          <form class="row g-3 " onSubmit={vehicleAdd}>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Vehicle Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                onChange={(e) =>
                  SetVehicleData({
                    ...vehicledata,
                    vehicleName: e.target.value,
                  })
                }
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Vehicle No
              </label>
              <input
                type="text"
                class="form-control"
                id="phoneno"
                onChange={(e) =>
                  SetVehicleData({ ...vehicledata, vehicleNo: e.target.value })
                }
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                Initial KM
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                onChange={(e) =>
                  SetVehicleData({ ...vehicledata, initialKM: e.target.value })
                }
              />
            </div>
            {/* <div class="col-6">
              <label for="inputAddress" class="form-label">
                Color
              </label>
              <input type="text" class="form-control" id="inputAddress" />
            </div> */}
            <div className="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="ac"
                  name="condition"
                  id="flexRadioDefault1"
                  onChange={(e) =>
                    SetVehicleData({
                      ...vehicledata,
                      condition: e.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  AC
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="nonAc"
                  name="condition"
                  id="flexRadioDefault2"
                  onChange={(e) =>
                    SetVehicleData({
                      ...vehicledata,
                      condition: e.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Non-AC
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label for="inputAddress" class="form-label">
                Vehicle Type
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="vehicletype"
                  value="car"
                  id="flexRadioDefault1"
                  onChange={(e) =>
                    SetVehicleData({
                      ...vehicledata,
                      vehicletype: e.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Car
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="vehicletype"
                  value="van"
                  id="flexRadioDefault2"
                  onChange={(e) =>
                    SetVehicleData({
                      ...vehicledata,
                      vehicletype: e.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Van
                </label>
              </div>
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                Capacity
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                onChange={(e) =>
                  SetVehicleData({
                    ...vehicledata,
                    seatCapacity: e.target.value,
                  })
                }
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">
                ADD image
              </label>
              <input type="file" accept="image/*" onChange={(e) => SetVehicleData({ ...vehicledata, image: e.target.files[0] })}/>
            </div>

            <div class="col-12 d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-primary"
                style={{ width: "250px", height: "50px" }}
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addvehicle;
