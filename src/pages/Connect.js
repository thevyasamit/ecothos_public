import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FloatingEarth from '../components/FloatingEarth';

const Connect = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating Earth Elements */}
        <FloatingEarth size={64} top="12%" left="6%" duration={11} delay={0} opacity={0.22} />
        <FloatingEarth size={48} top="22%" right="10%" duration={13} delay={2} opacity={0.17} />
        <FloatingEarth size={80} top="65%" left="12%" duration={15} delay={1.5} opacity={0.16} />
        <FloatingEarth size={56} top="80%" right="8%" duration={12} delay={0.5} opacity={0.19} />
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#000000',
              }}
            >
              Schedule a Demo
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                opacity: 0.9,
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              See how Ecothos can transform your Scope 3 emissions tracking with AI-powered accuracy.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Calendly Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            minHeight: '700px',
            width: '100%',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://calendly.com/23amitvyas/30min"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a Demo"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Connect; 