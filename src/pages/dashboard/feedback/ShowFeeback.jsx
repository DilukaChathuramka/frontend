import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function ShowFeeback() {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null);
  
  const fetchFeedback = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/feedback/getfeedback");
      setFeedback(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchFeedback();
  }, []); 

 
  const handelpending = async (id) => {
    try {
      const response = await axios.put(`/feedback/acceptfeedback/${id}`);
      setMsg(response.data.message);
      await fetchFeedback(); // Refresh feedback data after update
    } catch (err) {
      console.error(err);
    }
  };

  const handeldelete = async (id) => {
    try {
      const response = await axios.put(`/feedback/deletefeedback/${id}`);
      setMsg(response.data.message);
      await fetchFeedback(); // Refresh feedback data after update
    } catch (err) {
      console.error(err);
    }
  }

  if (isLoading) {
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
  console.log(feedback);
  return (
    <div>
      {msg ? (
        <p className="alert alert-success">{msg}</p>
      ) : error ? (
        <p className="alert alert-danger">{error}</p>
      ) : null}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">vehicle Name</th>
            <th scope="col">Driver Name</th>

            <th scope="col">Message</th>
            <th scope="col">Accept</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {feedback &&
          feedback.map((feedback, index) => (
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{feedback.user && feedback.user.name}</td>
                <td>
                  {feedback.vehicle ? (
                    feedback.vehicle.vehicleName
                  ) : (
                    <p>No feedback to vehicle</p>
                  )}
                </td>

                <td>
                  {feedback.driver ? (
                    feedback.driver.name
                  ) : (
                    <p>No feedback to driver</p>
                  )}
                </td>

                <td>{feedback.message}</td>
                <td>
                  {feedback.status === "pending" ? (
                    <button
                      className="btn"
                      onClick={() => handelpending(feedback._id)}
                    >
                      pending
                    </button>
                  ) : (
                    <button
                      className="btn"
                      style={{ backgroundColor: "green" }}
                    >
                      accepted
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn" onClick={() => handeldelete(feedback._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default ShowFeeback;
