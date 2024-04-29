import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
function Allpayment() {
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = payment.filter((payment) =>
  payment.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  payment.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  payment.user.phoneNo.toString().includes(searchQuery)
  );
  const downloadExcel = () => {
    const payments = payment; // Assume `payment` is your state variable holding the payment details
    const worksheet = XLSX.utils.json_to_sheet(payments);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");

    // Define a date for file naming
    let date = new Date().toISOString().slice(0,10);

    // Trigger the download
    XLSX.writeFile(workbook, `Payment_Details_${date}.xlsx`);
};

  const hadleDetails=(id)=>{
    navigate(`/payment-details/${id}`)
  }

//   const downloadExcel = () => {
//     const payments = payment; // Assume `payment` is your state variable holding the payment details
//     const worksheet = XLSX.utils.json_to_sheet(payments);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");

//     // Define a date for file naming
//     let date = new Date().toISOString().slice(0,10);

//     // Trigger the download
//     XLSX.writeFile(workbook, `Payment_Details_${date}.xlsx`);
// };

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

  // console.log(payment);

  return (
    <div>
      <button onClick={downloadExcel} className="btn btn-success mb-3">Download Excel Report</button>
      <div className="search-container col-5 mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone number"
          style={{border:'3px solid',borderRadius:'15px',fontSize:'20px'}}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">package details(report)</th>
            {/* <th scope="col">Action</th> */}
            
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((payment, index) => (
            <tr key={payment._id}>
              <th scope="row">{index + 1}</th>
              <td>{payment.user && payment.user.name}</td>
              <td>{payment.user && payment.user.email}</td>
              <td>{payment.user && payment.user.phoneNo}</td>
             
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
