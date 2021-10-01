import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPetsPaginationAction } from '../redux/actions/pets';
import Avatar from '../components/Avatar'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  @media (max-width: 420px) {
  padding: 0;
  margin: 0;
  }
  @media (min-width: 1440px) {
  margin: 1rem;
  padding: 1rem;
  }
`

const PrincipalText = styled.div`
  display: inline-block;
  border-radius: 3px;
  margin: 2rem;
  background: transparent;
  color: white;
  border: 4px solid white;

  @media (min-width: 420px) {
  margin: auto;

}
`
const ContainerImages = styled.div`
display: inline-block;
  border-radius: 3px;
  width: 100%;
  background: transparent;
  color: white;

}
`
const ContainerImageText = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    margin: 2rem;

  @media (max-width: 420px) {
    heigth: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    margin: 0;
}

}
`


const Home = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPetsPaginationAction(1))
    //eslint-disable-next-line
  }, [])

  const petsAvailable = useSelector((state) => state.pets.petsforpage);
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
            <h2>Adopt a Pet</h2>
            <p>There are likely hundreds of adoptable cats and dogs </p>
            <p>in your local animal shelters or rescues right now who would love to join your family.</p>
          </PrincipalText>
          <ContainerImageText>
            <ContainerImages>
              {petsAvailable.length === 0 ? <p>There is no available pets :C</p> : (
                petsAvailable.map(petAvailable => (
                  <Avatar
                    key={petAvailable._id}
                    data={petAvailable}
                  />
                ))
              )}
            </ContainerImages>
            <ContainerImages>
              <p>For over 150 years, the ASPCA has worked tirelessly to put an end to animal abuse and neglect. We are a national leader in animal rescue, protection and placement, and your tax-deductible donation will help fight cruelty and make a life-changing difference for animals across America. Thank you for making the ASPCA and the animals we serve a part of your life.</p>
            </ContainerImages>
          </ContainerImageText>
        </div>}





    </Container>
  );
}

export default Home;