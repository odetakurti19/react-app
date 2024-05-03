import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "../../../http/api";
import { removeToken } from "../../../http/tokenService";

interface CurrentUserContextType {
  _id: string;
  firstName: string,
  lastName: string,
  username: string;
  email: string;
  roles :any[];
  image: any;
  userId: string;
}

const UserContext = createContext<CurrentUserContextType>({ _id: "", firstName:"", lastName :"", username: "", email: "" ,roles:[], image:"", userId: ""});


export const UserProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<CurrentUserContextType>({ _id: "", firstName:"", lastName :"", username: "", email: "" ,roles:[], image:"", userId:""});

  const userProfile = useCallback(async () => {
    try {
      const {data: userProfile}= await Client.userProfile() as any;
      setUser(userProfile);
    } catch (error: any) {
      console.log(error.response);
      removeToken();
      navigate("/login");

    } finally {
    }
  }, [navigate]);

  useEffect(() => {
    userProfile()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext