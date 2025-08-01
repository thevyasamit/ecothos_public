import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            © 2025 Ecothos. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 