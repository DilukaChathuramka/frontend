import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
function DriverManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/driver/alldriver");
        setUsers(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.patch(`/driver/updateDriver/${id}`);
      const response = await axios.get("/driver/alldriver");
      setUsers(response.data);
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

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">license</th>
            <th scope="col">status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user => user.isActive).map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.license}</td>
              <td>
                <button className="btn btn-primary">Active</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}  
           </tbody> 
      </table>
    </div>
  );
}

export default DriverManagement;
