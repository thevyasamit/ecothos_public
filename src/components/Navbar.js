import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import EarthTreeLogo from './EarthTreeLogo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ my: 2, fontWeight: 800, color: '#2E7D32', fontSize: '2rem' }}>
              <EarthTreeLogo sx={{ mr: 1, verticalAlign: 'middle', fontSize: '2.8rem' }} />
              Ecothos
            </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} onClick={() => handleNavigation(item.path)}>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                fontWeight: 800, 
                color: '#2E7D32',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                mb: 0.5,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
              onClick={() => handleNavigation('/')}
            >
              <EarthTreeLogo sx={{ mr: 1, fontSize: { xs: '2.8rem', md: '3.2rem' } }} />
              Ecothos
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#43a047',
                fontStyle: 'italic',
                fontSize: { xs: '0.7rem', md: '0.85rem' },
                lineHeight: 1,
                fontWeight: 500,
              }}
            >
              Everybody wins, when you have fewer carbon footprints
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(46, 125, 50, 0.08)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 