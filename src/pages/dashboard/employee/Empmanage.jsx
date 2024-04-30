import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Empmanage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("/emp/getAll");
          setUsers(response.data);
          setIsLoading(false);
        } catch (err) {
          setError(err);
          setIsLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phoneNo.toString().includes(searchQuery)
    );
    const handleDelete = async (id) => {
      try {
        await axios.patch(`/emp/editemp/${id}`);
        toast.success("Employee Succuessully Delete")

        const response = await axios.get("/emp/getAll");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    
  
    const hadleEdit = async (id) => {
      navigate(`/empEdit-edit/${id}`);
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
    <>
       <div className="search-container  mb-4">
       <input
  type="text"
  placeholder="Search by name, email, or phone number"
  style={{
    border: '3px solid',
    borderRadius: '15px',
    fontSize: '20px',
    padding: '10px', // Add padding for better appearance
    width: '100%', // Set width to fill its container
  }}
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
          <th scope="col">address</th>
          <th scope="col">Action</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers
          .filter((user) => user.isActive)
          .map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => hadleEdit(user._id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleDelete(user._id)}
                  style={{ backgroundColor: "red",color:'black'}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </>
  )
}

export default Empmanage