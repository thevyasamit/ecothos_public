import React from 'react';
import { SvgIcon } from '@mui/material';

const EarthTreeLogo = (props) => (
  <SvgIcon {...props} viewBox="0 0 80 80">
    {/* Earth Circle */}
    <circle cx="40" cy="40" r="36" fill="#7ec850" stroke="#388e3c" strokeWidth="4" />
    {/* Continents (abstract shapes) */}
    <ellipse cx="32" cy="38" rx="10" ry="6" fill="#388e3c" opacity="0.7" />
    <ellipse cx="50" cy="50" rx="7" ry="4" fill="#388e3c" opacity="0.7" />
    {/* Tree trunk */}
    <rect x="37" y="48" width="6" height="16" rx="2" fill="#8d6e63" />
    {/* Tree foliage */}
    <ellipse cx="40" cy="46" rx="10" ry="6" fill="#43a047" />
    <ellipse cx="40" cy="42" rx="7" ry="4" fill="#66bb6a" />
  </SvgIcon>
);

export default EarthTreeLogo; 