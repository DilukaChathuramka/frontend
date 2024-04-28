import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user/alluser");
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
      await axios.patch(`/user/userDelete/${id}`);
      const response = await axios.get("/user/alluser");
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
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
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">Role</th>
            <th scope="col">status</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
                {users.filter(user => user.isActive).map((user,index) => (
                    <tr key={user._id}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.role}</td>
                        <td>{user.isActive ? 'Yes' : 'No'}</td>
                        <td>
                  <button
                    className="btn"
                    onClick={() => handleDelete(user._id)}
                    style={{ backgroundColor: "red",color:'black' }}
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

export default UserDetails;
