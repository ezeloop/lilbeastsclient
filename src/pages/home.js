import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPetsPaginationAction } from '../redux/actions/pets';
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100%;
  @media (max-width: 426px) {
  width: 100%;
  heigth: 100%
  }
  @media (min-width: 1440px) {
  margin: 0rem;
  padding: 2rem;
  }
  @media (max-width: 900px) {
  margin: 0;
  padding: 0;
  }
`

const PrincipalText = styled.div`
  border-radius: 3px;
  margin: 2rem;
  font-size: 2rem;
  color: white;
  border: 4px solid white;
  font-family: 'Roboto', sans-serif;
  padding: 2rem;
  
@media (max-width: 426px) {
  background-color: #bfe9ff;
  border-radius: 30px;
  color: black;
  margin: 0;
  font-size: 16px;
  padding: 0;
  }

  @media (max-width: 900px) {
  background-color: #bfe9ff;
  border-radius: 30px;
  color: black;
  margin: 0;
  font-size: 16px;
  padding: 0;
  margin-bottom: 1rem;
  text-align: center;
  width: 90%;
  }

  @media (min-width: 1600px) {
  background-color: #bfe9ff;
  color: black;
  margin: 0;
  font-size: 16px;
  padding: 0;
  text-align: center;
  width: 50%;
  heigth:100%
  }

@media (min-width: 1440px) {
  margin: 6rem 9rem;
  padding: 6rem 9rem;
  }
`
const Title = styled.h1 `
  background-color: #bfe9ff;
  border-radius: 30px;

`
const ContainerSecondaryText = styled.div`
  width: 500px;
  background: transparent;
  text-align: justify;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  background-color: #bfe9ff;
  border-radius: 30px;
  color:black;
  @media (max-width: 426px) {
  background-color: #bfe9ff;
  color: black;
  margin: 0;
  font-size: 16px;
  padding: 0.5rem;
  width: 100%;
  heigth: 100%;
  }

  @media (min-width: 1600px) {
  background-color: #bfe9ff;
  color: black;
  margin: 0;
  font-size: 1rem;
  padding: 0;
  text-align: center;
  width: 50%;
  heigth:100%
  }
}
`

const Home = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPetsPaginationAction(1))
    //eslint-disable-next-line
  }, [])

  const loading = useSelector((state) => state.pets.loading)

  return (
    <Container >
      {loading ?
        <div className="sk-container">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
        : <div>
          <PrincipalText>
            <Title>Adopt a Pet</Title>
            <p>There are likely hundreds of adoptable cats and dogs </p>
            <p>in your local animal shelters or rescues right now who would love to join your family.</p>
          </PrincipalText>


          <ContainerSecondaryText>
            <p>For over 150 years, the ASPCA has worked tirelessly to put an end to animal abuse and neglect. We are a national leader in animal rescue, protection and placement, and your tax-deductible donation will help fight cruelty and make a life-changing difference for animals across America. Thank you for making the ASPCA and the animals we serve a part of your life.</p>
          </ContainerSecondaryText>

        </div>}





    </Container>
  );
}

export default Home;