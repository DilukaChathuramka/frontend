import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
function Allpayment() {
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchpayment = async () => {
      try {
        const response = await axios.get("/payment/gellAll");
        setPayment(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchpayment();
  }, []);

  const hadleDetails=(id)=>{
    navigate(`/payment-details/${id}`)
  }

  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.patch(`/driver/updateDriver/${id}`);
  //       const response = await axios.get("/driver/alldriver");
  //       setUsers(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   const hadleEdit = async (id) => {
  //     navigate(`/driver-edit/${id}`);
  //   };

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

  console.log(payment);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">package details</th>
            {/* <th scope="col">Action</th> */}
            
          </tr>
        </thead>
        <tbody>
          {payment.map((payment, index) => (
            <tr key={payment._id}>
              <th scope="row">{index + 1}</th>
              <td>{payment.user.name}</td>
              <td>{payment.user.email}</td>
              <td>{payment.user.phoneNo}</td>
             
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => hadleDetails(payment._id)}
                >
                  details
                </button>
              </td>
              <td>
                {/* <button
                  className="btn btn"
                  onClick={() => handleDelete(payment._id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
}

export default Allpayment;
