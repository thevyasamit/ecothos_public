# Ecothos Website

A modern, responsive React website for Ecothos - an AI-powered Scope 3 emissions tracking platform.

## Features

- **Modern Design**: Built with Material-UI for a professional, responsive interface
- **Three Main Sections**: Home, About, and Connect pages
- **Calendly Integration**: Embedded scheduling system for demos
- **Scope 3 Focus**: Highlighting the critical importance of Scope 3 emissions (70% of total emissions)
- **AI-Powered Analytics**: Showcasing high accuracy in emissions tracking
- **GHG Protocol & SBTi Compliant**: Based on international sustainability standards

## Key Highlights

- **70% of emissions are Scope 3** - The main focus of our platform
- **95% tracking accuracy** - AI-powered calculations
- **GHG Protocol and SBTi based** - Industry-standard compliance
- **Public commute tracking** - Automated employee transportation monitoring
- **Employee rewards program** - Gamified sustainability engagement
- **Trendline analytics** - Advanced reporting and insights

## Technology Stack

- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - Professional UI components
- **React Router** - Client-side routing
- **Calendly** - Scheduling integration
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecothos_public
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   └── Navbar.js          # Navigation component
├── pages/
│   ├── Home.js            # Home page with features
│   ├── About.js           # About page with company info
│   └── Connect.js         # Connect page with Calendly
├── App.js                 # Main app component
└── index.js              # Entry point with theme setup

public/
├── img/                  # Images for the website
└── index.html           # HTML template
```

## Customization

### Theme Colors

The website uses a sustainability-focused color scheme:
- **Primary Green**: #2E7D32 (sustainability theme)
- **Secondary Blue**: #1976D2 (trust and technology)
- **Background**: Light gray for readability

### Calendly Integration

To update the Calendly calendar URL, modify the `url` parameter in `src/pages/Connect.js`:

```javascript
url: 'https://calendly.com/your-calendly-url'
```

### Images

All images are stored in `public/img/` and include:
- `trendline.png` - Analytics and tracking visuals
- `daily_checkin_pic1.png` - Daily check-in interface
- `reward_Pic1.png` - Employee rewards program
- Additional feature images

## Key Messages

The website emphasizes these core messages:

1. **Scope 3 is Critical**: 70% of emissions are Scope 3
2. **AI-Powered Accuracy**: 95% tracking accuracy
3. **Industry Standards**: GHG Protocol and SBTi compliant
4. **Comprehensive Solution**: From tracking to rewards to analytics
5. **Easy Implementation**: Quick setup and user-friendly interface

## Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder
- **GitHub Pages**: Use the `build` folder as the source

## Support

For questions or support, please contact:
- Email: hello@ecothos.com
- Phone: +1 (555) 123-4567

## License

This project is proprietary to Ecothos. 