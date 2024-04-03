import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PayementDetails() {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchpayment = async () => {
      try {
        const response = await axios.get(`/payment/getpayemnt/${id}`);
        setPayment(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchpayment();
  }, []);
  if (!payment || !payment.packageName) {
    // You can render a loading spinner or a message here
    return <div>Loading...</div>;
}
  console.log(payment);
  return (
    <div className="container">
      <div className="details-box">
      <div>
        

       
            <h2>Payment Information</h2>
            <p>ID: {payment._id}</p>
            <p>User ID: {payment.user}</p>
            <p>Package Name: {payment.packageName.packagename}</p>
            <p>Package Type: {payment.packageType}</p>
            <p>Payment Type: {payment.payementType}</p>
            <p>Total: {payment.total}</p>
            
            <h3>Bill Details</h3>
            {payment.billDetails.map((bill, index) => (
                <div key={bill._id}>
                    <p>Name: {bill.name}</p>
                    <p>Address: {bill.address}, {bill.town}</p>
                    <p>Phone Number: {bill.phoneNo}</p>
                    <p>Email: {bill.email}</p>
                </div>
            ))}

            <h3>Card Details</h3>
            {payment.cardDetails.map((card, index) => (
                <div key={card._id}>
                    <p>Card Number: {card.cardNumber}</p>
                    <p>Expire Month: {card.expireMonth}</p>
                    <p>Expire Date: {card.expireDate}</p>
                    <p>CVV: {card.cvv}</p>
                </div>
            ))}
        
        </div>
      </div>
            
    </div>
  );
}

export default PayementDetails;
