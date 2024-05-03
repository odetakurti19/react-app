import React from 'react';
import { Tabs, Tab, AppBar, Typography, Box, Container } from '@mui/material';

function RolesTab() {
  // Function to fetch and display roles list
  const fetchRolesList = () => {
    // Fetch roles list from API or local storage
    const rolesList = ['Admin', 'Manager', 'Employee']; // Example list
    return (
      <ul>
        {rolesList.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Roles</Typography>
      {fetchRolesList()}
    </Box>
  );
}

function AvailabilityTab() {
  // Function to fetch and display availability list
  const fetchAvailabilityList = () => {
    // Fetch availability list from API or local storage
    const availabilityList = ['Full-time', 'Part-time', 'Remote']; // Example list
    return (
      <ul>
        {availabilityList.map((availability, index) => (
          <li key={index}>{availability}</li>
        ))}
      </ul>
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Availability</Typography>
      {fetchAvailabilityList()}
    </Box>
  );
}

export default function Settings() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event:any, newValue:any) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Roles" />
          <Tab label="Availability" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <RolesTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <AvailabilityTab />
      </TabPanel>
    </Container>
  );
}

function TabPanel(props:any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}