import React, { useState, useCallback, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "../../http/api/index";
import { removeToken } from "../../http/tokenService";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const userProfile = useCallback(async () => {
    try {
      const { data: userProfile } = await Client.userProfile();
      setUser(userProfile.user);
    } catch (error) {
      console.log(error.response);
      removeToken();
      navigate("/login");
    } finally {
    }
  }, [navigate]);
  useEffect(() => {
    userProfile();
  }, [userProfile]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
