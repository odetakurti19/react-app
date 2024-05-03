import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../pages/User/UserProvider/UserProvider";
import Header from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <>
    <UserProvider>
      <div className="header-box">
      <Header/>
      </div>
      <Box className="outlet"  sx={{ pt: '6rem', position: 'relative' }}>
        <Outlet/>
      </Box>
      <footer></footer>
     </UserProvider>
    </>
  );
};