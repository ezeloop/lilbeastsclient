import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const About = () => {

  const PrincipalText = styled.div`
  display: inline-block;
  border-radius: 3px;
  margin: 2rem;
  background: transparent;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
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
      <h2>Monetary donation</h2>
      <IconButton
        size="large"
        edge="start"
        style={{ color: '#404969' }}
        aria-label="menu"
      >
        <MonetizationOnIcon />
      </IconButton>
      <p>Financial contributions are always needed to support the best care possible to the animals in the shelter and in the community. Our goal is to help keep pets in their homes or to find them new permanent forever homes. Your support will  also help Austin maintain its status as the largest no-kill city in the country. Donated funds are used to treat serious injuries, provide dog houses and fencing  assistance, emergency response and basic pet and health care items for low-income pet owners etc.  To have the greatest impact, please give a recurring donation. To make a tax deductible gift click the DONATE button below.
        Animal Services has numerous programs and partnerships designed to help pets in the shelter, in the community, and at home. Your donation will be used to provide these pets the extra attention and care they need and deserve.</p>

    </PrincipalText>
  );
}

export default About;