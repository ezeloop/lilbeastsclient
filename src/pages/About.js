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
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: white;
  border: 4px solid white;
  height: 100%;
  @media (max-width: 768px) {
  width: 300px;
  font-size: 16px;
  padding: 0;
  margin: 0;
  border-radius: none;
  border: none;
  box-shadow: none;
  }
  @media (min-width: 1440px) {
  margin: 3rem 9rem;
  padding: 3rem 9rem;
  }

  
}
`

const Title = styled.h1 `
  background-color: #bfe9ff;
  border-radius: 30px;

  @media (max-width: 320px) {
  width: 250px;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  }
`

const TextContainer = styled.div `
  width: 100%;
  background-color: #bfe9ff;
  border-radius: 30px;
  padding: 0.5rem;

  @media (max-width: 320px) {
  width: 250px;
  font-size: 16px;
  padding: 0;
  margin: 0;
  }
`

const Text = styled.p `
padding: 2rem;
color: black;
text-align: justify;
`

  return (
    <PrincipalText>
      <Title>Monetary donation</Title>
      <IconButton
        size="large"
        edge="start"
        style={{ color: '#404969' }}
        aria-label="menu"
      >
      </IconButton>
      <TextContainer>
      <Text>Financial contributions are always needed to support the best care possible to the animals in the shelter and in the community. Our goal is to help keep pets in their homes or to find them new permanent forever homes. Your support will  also help Austin maintain its status as the largest no-kill city in the country. Donated funds are used to treat serious injuries, provide dog houses and fencing  assistance, emergency response and basic pet and health care items for low-income pet owners etc.  To have the greatest impact, please give a recurring donation. To make a tax deductible gift click the DONATE button below.
        Animal Services has numerous programs and partnerships designed to help pets in the shelter, in the community, and at home. Your donation will be used to provide these pets the extra attention and care they need and deserve.</Text>
      </TextContainer>
    </PrincipalText>
  );
}

export default About;