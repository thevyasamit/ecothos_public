import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {
  TrendingUp,
  Commute,
  EmojiEvents,
  Analytics,
  CheckCircle,
  Speed,
  Psychology,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FloatingEarth from '../components/FloatingEarth';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Scope 3 Tracking",
              subtitle: "Revolutionary emissions tracking with industry-leading AI technology. Built on GHG Protocol and SBTi standards for enterprise-grade reliability.",
      image: "/img/trendline.png",
      showButtons: false,
    },
    {
      title: "Employee-Verified Audit Data",
      subtitle: "70% of corporate emissions are Scope 3 - the hidden challenge. Our breakthrough solution delivers 95% accurate calculations verified by employees themselves, creating bulletproof audit-grade data that stands up to scrutiny.",
      image: "/img/daily_checkin_pic1.png",
      showButtons: false,
    },
    {
      title: "Daily Knowledge & Insights",
      subtitle: "Transform your team into sustainability champions with our cutting-edge knowledge cards. Daily facts, actionable insights, and proven strategies that drive measurable behavior change and environmental impact.",
      image: "/img/flash_card_pic1.png",
      showButtons: false,
    },
    {
      title: "Voice-Activated AI Engagement",
      subtitle: "Revolutionary voice-based AI agent captures employee sustainability efforts in real-time. Seamless, natural interactions that reveal hidden opportunities and drive meaningful change across your organization.",
      image: "/img/voice_record_pic1.png",
      showButtons: false,
    },
    {
      title: "Gamified Sustainability Rewards",
      subtitle: "Turn sustainability into a winning game. Our advanced gamification system rewards eco-friendly choices with real-time feedback, achievements, and recognition. Motivate your team to become environmental champions.",
      image: "/img/reward_Pic1.png",
      showButtons: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Scope 3 Emissions Tracking',
              description: '70% of emissions are Scope 3. Track them with AI-powered calculations based on GHG Protocol and SBTi standards.',
      image: '/img/trendline.png',
      stats: '70% of emissions',
              highlight: 'AI-powered',
    },
    {
      icon: <Commute sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Public Commute Tracking',
      description: 'Automatically track employee commute patterns and calculate carbon footprint from daily transportation choices.',
      image: '/img/daily_checkin_pic1.png',
      stats: 'Real-time tracking',
      highlight: 'Automated detection',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Employee Rewards Program',
      description: 'Motivate sustainable behavior with gamified rewards and recognition for eco-friendly choices.',
      image: '/img/reward_Pic1.png',
      stats: 'Gamified rewards',
      highlight: 'Behavior change',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'AI-Powered Analytics',
      description: 'Advanced trendline analysis and predictive insights to optimize your sustainability strategy.',
      image: '/img/trendline.png',
      stats: 'Predictive insights',
      highlight: 'AI-powered',
    },
  ];

  return (
    <Box>
      {/* Hero Carousel Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Floating Earth Elements */}
        <FloatingEarth size={64} top="12%" left="6%" duration={11} delay={0} opacity={0.22} />
        <FloatingEarth size={48} top="22%" right="10%" duration={13} delay={2} opacity={0.17} />
        <FloatingEarth size={80} top="65%" left="12%" duration={15} delay={1.5} opacity={0.16} />
        <FloatingEarth size={56} top="80%" right="8%" duration={12} delay={0.5} opacity={0.19} />

        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
            },
            zIndex: 10,
          }}
        >
          <ChevronLeft sx={{ fontSize: 40 }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
            },
            zIndex: 10,
          }}
        >
          <ChevronRight sx={{ fontSize: 40 }} />
        </IconButton>

        {/* Slide Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: 1,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#000000',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {slides[currentSlide].title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    lineHeight: 1.6,
                    color: '#000000',
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {slides[currentSlide].subtitle}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={slides[currentSlide].image}
                  alt="Feature"
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 10,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.8)',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Key Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <Typography variant="h2" color="primary" fontWeight={700}>
                70%
              </Typography>
              <Typography variant="h6" color="text.secondary">
                CO2 Emissions are Scope 3
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <Typography variant="h2" color="primary" fontWeight={700}>
                95%
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Calculation Accuracy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <Typography variant="h2" color="primary" fontWeight={700}>
                AI
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Powered
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="center">
              <Typography variant="h2" color="primary" fontWeight={700}>
                Verified Data
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Audit grade and Compliant Ready
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" fontWeight={600} mb={2}>
              Comprehensive Sustainability Platform
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              From seamless one-click daily check-ins to AI-powered calculations with 95% accuracy, 
              we deliver verified data, GHG & SBTi Protocol compliant, auditable, 
              and AI-generated reports for comprehensive Scope 3 emissions management.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {feature.icon}
                      <Typography variant="h5" fontWeight={600} ml={2}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                      {feature.description}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={feature.stats}
                        sx={{
                          backgroundColor: '#1976d2',
                          color: 'white',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#1565c0',
                          }
                        }}
                        size="small"
                      />
                      <Chip
                        label={feature.highlight}
                        sx={{
                          backgroundColor: '#388e3c',
                          color: 'white',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#2e7d32',
                          }
                        }}
                        size="small"
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #388e3c 0%, #43a047 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" fontWeight={600} mb={3}>
              Ready to Start Your Sustainability Journey?
            </Typography>
            <Typography variant="h6" mb={4} sx={{ opacity: 0.9 }}>
              Join leading companies using AI-powered emissions tracking to achieve their sustainability goals.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/connect')}
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                px: 4,
                py: 2,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Schedule a Demo
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 