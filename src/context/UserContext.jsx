import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/user/getuser')
      .then(({ data }) => {
        if (data.newuser && data.newuser.isActive===true && data.newuser.role==="user") {
          setUser(data.newuser);
        } else {
          setError('User not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  // Update user details
  // const updateUser = (newDetails) => {
  //   setUser(newDetails);
  // };

  return (
    <UserContext.Provider value={{ user,setUser, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
