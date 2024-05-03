import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.js";
import Home  from "../pages/Home.tsx";
import LoggedOut from "../layout/LoggedOut";
import {MainLayout} from "../layout/main";
import UserProfile from "../pages/User/UserProfile/UserProfile";
import Settings from "../pages/Settings/Settings";
import Register from "../pages/Register/Register";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userId" element={<UserProfile />}></Route>
            <Route path="/profile/settings" element={<Settings />}></Route>
          </Route>
        </Route>
        <Route element={<LoggedOut />}>
            <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};