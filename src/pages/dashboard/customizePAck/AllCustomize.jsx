import axios from "axios";

import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
function AllCustomize() {
  const [pack, setPack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/customizepack/getallcustompackage");
        setPack(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.put(`/customizepack/detelecustompack/${id}`);
      const response = await axios.get("/customizepack/getallcustompackage");
      setPack(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadPdfDocument = () => {
    const input = document.getElementById("table-to-xport"); // Ensure your table has this id
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("report.pdf");
    });
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
  return (
    <div>
      <div>
        <button className="btn btn-primary mb-3" onClick={downloadPdfDocument}>
          Download
        </button>
      </div>
      <table class="table table-striped" id="table-to-xport">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">vehicle Name</th>
            <th scope="col">Drive Name</th>
            <th scope="col">Duration (days)</th>
            <th scope="col">Distance(km)</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {pack &&
            pack.map((data, index) => (
              <tr key={data.user && data._id}>
                <td>{index + 1}</td>
                <td>{data.user && data.user.name}</td>
                <td>{data.user && data.user.email}</td>
                <td>{data.user && data.user.phoneNo}</td>
                <td>{data.user && data.vehicle.vehicleName}</td>
                <td>{data.user && data.driver.name}</td>
                <td>{data.user && data.duration}</td>
                <td>{data.user && data.distance}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCustomize;
