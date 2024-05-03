import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { removeToken } from "../../http/tokenService";

export interface Options {
  id: number, label: string, onclick: () => void
}



const Dropdown = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState('');

  // const toggleActive = () => setActive((v) => !v);
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  const handleNavigate = () => {
    navigate(`/profile/odeta`)
  }


  const options: Options[] = [
    { id: 1, label: "Profile", onclick: handleNavigate },
    { id: 2, label: "Logout", onclick: handleLogout }
  ];


  const handleChange = (event: SelectChangeEvent) => {
    setActive(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Profile</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={active}
        label="Profile"
      onChange={handleChange}
      >
        {options.map((option: any) => {
          return (

            <MenuItem key={option.id} value={option.id} onClick={option.onclick}>
              {option.label}

            </MenuItem>

          )
        })}
      </Select>
    </FormControl>

  );
};

export default Dropdown;