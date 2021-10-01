import React from 'react';
import styled from 'styled-components';
import {IconButton} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const About = () => {
  
  const PrincipalText = styled.div`
  display: inline-block;
  border-radius: 3px;
  margin: 2rem;
  background: transparent;
  color: white;
  border: 4px solid white;
  height: 100%;
  @media (max-width: 768px) {
  width: 200px;
  padding: 0;
  height: 100vh;
  }
  @media (min-width: 1440px) {
  margin: 13rem 9rem;
  padding: 13rem 9rem;
  }
}
`

  return ( 
    <PrincipalText>
      <h2>Donate</h2>
      <IconButton
                size="large"
                edge="start"
                style={{ color: '#404969' }}
                aria-label="menu"
              >
                <MonetizationOnIcon />
              </IconButton>
      <p>Your gift can help feed a rescued dog or cat for almost a month.</p>

      </PrincipalText>
   );
}
 
export default About;