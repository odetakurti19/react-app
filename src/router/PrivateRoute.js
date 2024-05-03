import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../http/tokenService";

export const PrivateRoute = () => {
  const isAuthed = getToken();
  // const isAuthed = true;
  return <>{isAuthed !== null ? <Outlet/> : <Navigate to="/login" />}</>;
};