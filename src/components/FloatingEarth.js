import React from 'react';
import { Box } from '@mui/material';
import EarthTreeLogo from './EarthTreeLogo';

const FloatingEarth = ({
  size = 56,
  top,
  left,
  right,
  duration = 10,
  delay = 0,
  opacity = 0.3,
}) => (
  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      right,
      opacity,
      zIndex: 0,
      animation: `floatEarth ${duration}s ease-in-out ${delay}s infinite alternate`,
      pointerEvents: 'none',
      filter: 'blur(0.5px) drop-shadow(0 2px 8px #43e97b44)',
    }}
  >
    <EarthTreeLogo sx={{ fontSize: size, color: '#388e3c' }} />
  </Box>
);

export default FloatingEarth; 