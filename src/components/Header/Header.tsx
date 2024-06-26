import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Client } from '../../http/api';
import UserContext from '../../pages/User/UserProvider/UserProvider';
import { useContext } from 'react';

const logoStyle = {
  width: '65px',
  height: 'auto',
  cursor: 'pointer',
  paddingLeft: '1rem'
};



const Header= () =>{
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);


  const handleLogout = async () => {
    localStorage.removeItem("jwt");
    await Client.logout()
    navigate('/login')
  };

  const profileUrl = `/profile/${userId}`;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link to='/'>

              <img
                src={
                  'http://localhost:3001/uploads/0717b82e-9fa9-43a5-8c2d-84645a1c78a8.png'
                }
                style={logoStyle}
                alt="Logo of Odetchie"
                />
                </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/profile/odeta" style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Profile
                  </Typography>
                </MenuItem>
                </Link>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
              <Link to="/profile/settings" style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Settings
                  </Typography>
                </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
                            <Link to={profileUrl} style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Profile
                  </Typography>
                </MenuItem>
                </Link>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                onClick={handleLogout}
              >
               Log Out
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;