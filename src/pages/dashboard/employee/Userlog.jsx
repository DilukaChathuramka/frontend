import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BallTriangle } from "react-loader-spinner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Userlog() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/emp/alllog");
        setUsers(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const downloadPDF = () => {
    const filename = `userlog_report.pdf`;

    html2canvas(tableRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
// Add the heading "Login Report" to the PDF
    // Add the heading "Login Report" to the PDF
    pdf.text("Login Report", 10, 10);

      pdf.addImage(imgData, "PNG", 0, 20, imgWidth, imgHeight);

      pdf.save(filename);
    });
    toast.success("Emplye Report Genarate")

  };

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
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p>This is the admin login report. You can download the report in PDF format below.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className="mb-3">Admin Login Report</h2>
        <button className="mb-3" onClick={downloadPDF} style={{ color: "white", background: '#4e73df', padding: '10px', borderRadius: '.6rem' }}>Download Report</button>
      </div>
      <table ref={tableRef} className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">Role</th>
            <th scope="col">Login Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            // Convert timestamp string to a Date object
            const dateObj = new Date(user.timestamp);

            // Format the date (MM/DD/YYYY)
            const formattedDate = `${
              dateObj.getMonth() + 1
              }/${dateObj.getDate()}/${dateObj.getFullYear()}`;

            // Format the time (HH:MM:SS)
            const formattedTime = `${dateObj.getHours()}:${(
              "0" + dateObj.getMinutes()
            ).slice(-2)}:${("0" + dateObj.getSeconds()).slice(-2)}`;

            // Render the table row with adjusted date and time format
            return (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.userId.name}</td>
                <td>{user.userId.email}</td>
                <td>{user.userId.phoneNo}</td>
                <td>{user.userId.role}</td>
                <td>{`${formattedDate} ${formattedTime}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Userlog;
