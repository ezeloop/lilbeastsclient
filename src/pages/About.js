import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { ContainerWithStyles } from '../styles/Container';
import { Title } from '../styles/Title';

const About = () => {

const Detail = styled.div`
  padding: 3rem;
  border-radius: 30px;
 
 p {
   text-align: justify;
   color: white;
   font-weight: bold;
   line-height: 1.5;
   font-size: 2rem;
   @media (max-width: 468px) {
      font-size: 1rem;
  }
 }
`

const ContainerSecondaryText = styled.div`
  display: grid;
  justify-content: center;
 
}
`

  return (
    <ContainerWithStyles>
      <Title backgroundColor="#334756">
        <h1>Monetary donation</h1>
      </Title>
      <IconButton
        size="large"
        edge="start"
        style={{ color: '#404969' }}
        aria-label="menu"
      >
      </IconButton>
      <ContainerSecondaryText>
      <Detail>
        <p>Financial contributions are always needed to support the best care possible to the animals in the shelter and in the community. Our goal is to help keep pets in their homes or to find them new permanent forever homes. Your support will  also help Austin maintain its status as the largest no-kill city in the country. Donated funds are used to treat serious injuries, provide dog houses and fencing  assistance, emergency response and basic pet and health care items for low-income pet owners etc.  To have the greatest impact, please give a recurring donation. To make a tax deductible gift click the DONATE button below.
        Animal Services has numerous programs and partnerships designed to help pets in the shelter, in the community, and at home. Your donation will be used to provide these pets the extra attention and care they need and deserve.</p>
      </Detail>
      </ContainerSecondaryText>
    </ContainerWithStyles>
  );
}

export default About;