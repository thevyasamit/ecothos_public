import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import {
  Psychology,
  Speed,
  Security,
  Analytics,
  Nature,
  TrendingUp,
  CheckCircle,
  Star,
} from '@mui/icons-material';
import FloatingEarth from '../components/FloatingEarth';

const About = () => {
  // Debug image loading
  React.useEffect(() => {
    console.log('About component mounted');
    const img1 = new Image();
    img1.onload = () => console.log('Report pic 1 loaded successfully');
    img1.onerror = () => console.error('Failed to load report pic 1');
    img1.src = '/img/report_pic_1.png';
    
    const img2 = new Image();
    img2.onload = () => console.log('Report pic 2 loaded successfully');
    img2.onerror = () => console.error('Failed to load report pic 2');
    img2.src = '/img/report_pic_2.png';
    
    const img3 = new Image();
    img3.onload = () => console.log('Report pic 3 loaded successfully');
    img3.onerror = () => console.error('Failed to load report pic 3');
    img3.src = '/img/report_pic_3.png';
  }, []);
  const technologies = [
    { name: 'AI/ML', icon: <Psychology />, color: 'primary' },
    { name: 'GHG Protocol', icon: <CheckCircle />, color: 'success' },
    { name: 'SBTi Standards', icon: <Star />, color: 'warning' },
    { name: 'Real-time Analytics', icon: <Analytics />, color: 'info' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI to solve complex sustainability challenges',
      icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Accuracy',
              description: 'High accuracy in emissions tracking through advanced algorithms',
      icon: <CheckCircle sx={{ fontSize: 40, color: 'success.main' }} />,
    },
    {
      title: 'Transparency',
      description: 'Clear, auditable calculations based on international standards',
      icon: <Security sx={{ fontSize: 40, color: 'info.main' }} />,
    },
    {
      title: 'Impact',
      description: 'Driving measurable change in corporate sustainability',
      icon: <Nature sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
  ];

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
              About Ecothos
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                color: '#000000',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
              }}
            >
              We're revolutionizing how organizations track and manage their Scope 3 emissions 
                              through AI-powered technology with high accuracy and user-verified data.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight={600} mb={3}>
              Our Mission
            </Typography>
            <Typography variant="h6" color="#000000" paragraph>
              To democratize access to accurate Scope 3 emissions tracking, enabling organizations 
              of all sizes to make data-driven sustainability decisions.
            </Typography>
            <Typography variant="body1" color="#000000" paragraph>
              With 70% of corporate emissions falling under Scope 3, traditional tracking methods 
              are insufficient. Our AI-powered platform provides the accuracy and ease-of-use 
              needed to tackle this critical challenge.
            </Typography>
            <Typography variant="body1" color="#000000">
              We believe that every organization should have access to enterprise-grade 
              sustainability analytics, regardless of their size or technical expertise.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/trendline.png"
              alt="Mission Visualization"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Employee Engagement Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/img/daily_checkin_pic2.png"
                alt="Employee Engagement"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight={600} mb={3}>
                Employee Engagement is Crucial
              </Typography>
              <Typography variant="h6" color="#000000" paragraph>
                Sustainability is bottom-up. We engage employees through daily check-ins, 
                making sustainability a part of their daily routine.
              </Typography>
              <Typography variant="body1" color="#000000" paragraph>
                Our platform transforms sustainability from a corporate initiative into 
                personal responsibility. Every employee becomes an environmental champion, 
                contributing to measurable change.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Knowledge & Gamification Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight={600} mb={3}>
              Knowledge + Gamification = Success
            </Typography>
            <Typography variant="h6" color="#000000" paragraph>
              Gamification makes sustainability exciting, while knowledge cards help you 
              get better at saving CO2 and become more sustainable.
            </Typography>
            <Typography variant="body1" color="#000000" paragraph>
              Like human health, we need to focus on environmental health as well. 
              We gamify this journey to reward people for their sustainable actions, 
              creating a culture of environmental responsibility.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/voice_record_pic2.png"
              alt="Knowledge and Gamification"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Rewards Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box
                  component="img"
                  src="/img/reward_Pic1.png"
                  alt="Rewards System"
                  sx={{
                    width: '48%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                />
                <Box
                  component="img"
                  src="/img/reward_pic2.png"
                  alt="Rewards System"
                  sx={{
                    width: '48%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight={600} mb={3}>
                Rewarding Sustainable Actions
              </Typography>
              <Typography variant="h6" color="#000000" paragraph>
                We gamify environmental health to reward people for their sustainable actions, 
                creating a culture of environmental responsibility.
              </Typography>
              <Typography variant="body1" color="#000000" paragraph>
                Our reward system recognizes and celebrates every sustainable choice, 
                from choosing public transport to reducing energy consumption. 
                Every action counts towards a healthier planet.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Reporting Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" fontWeight={600} mb={3}>
            Audit-Grade Verified Data
          </Typography>
          <Typography variant="h6" color="#000000" paragraph>
            For reporting, we provide audit-grade verified data so that companies 
            are compliant and can be confident with their sustainability efforts.
          </Typography>
          <Typography variant="body1" color="#000000" paragraph>
            Our platform generates enterprise-grade reports that meet regulatory 
            requirements and industry standards. Companies can trust our data 
            for compliance, investor relations, and stakeholder communications.
          </Typography>
          
          {/* Report Images Grid */}
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/img/report_pic_1.png"
                    alt="Audit Report Sample 1"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      p: 2,
                      textAlign: 'left',
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Comprehensive Analytics
                    </Typography>
                    <Typography variant="body2">
                      Detailed emissions breakdown and trends
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/img/report_pic_2.png"
                    alt="Audit Report Sample 2"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      p: 2,
                      textAlign: 'left',
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Emission Source Analysis
                    </Typography>
                    <Typography variant="body2">
                      Detailed breakdown by source category
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/img/report_pic_3.png"
                    alt="Audit Report Sample 3"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      p: 2,
                      textAlign: 'left',
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Compliance Ready
                    </Typography>
                    <Typography variant="body2">
                      Audit-grade data for regulatory reporting
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Additional Info */}
          <Box sx={{ mt: 6, p: 4, backgroundColor: 'rgba(67, 233, 123, 0.1)', borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2} color="primary">
              Why Choose Our Reports?
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    GHG Protocol Compliant
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Based on international standards
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Security sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    Employee Verified
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    95% accuracy through user validation
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Analytics sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    Real-time Updates
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Live data synchronization
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign="center">
                  <Star sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    Audit Ready
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ready for external verification
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 