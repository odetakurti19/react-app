import React from "react";

import "./App.css";
import Login from "./pages/Login";
import { Nav } from "./components/Nav";
import { Alert } from "./components/Alert";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "@mui/icons-material";
import DashLayout from "./components/DashLayout";
import { AllRoutes } from "./router";
import { Box } from "@mui/material";
export const history = {
  navigate: null,
  location: null,
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* <Login/> */}

      <Box
        className="app-container bg-light"
        sx={{
          width: "100%",
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Nav /> */}
        {/* <Alert /> */}
        <div className="container pt-4 pb-4">
          <AllRoutes />
        </div>
      </Box>
    </>
  );
}

export default App;
