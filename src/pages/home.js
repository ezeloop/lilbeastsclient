import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPetsPaginationAction } from '../redux/actions/pets';
import styled from 'styled-components'
import { ContainerWithStyles } from '../styles/Container';
import { Title } from '../styles/Title';

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

const Home = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPetsPaginationAction(1))
    //eslint-disable-next-line
  }, [])

  const loading = useSelector((state) => state.pets.loading)

  return (
    <ContainerWithStyles>
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
          
            <Title backgroundColor="#334756">
              <h1>Adopt a Pet</h1>
            </Title>
            <Detail>
            <p>There are likely hundreds of adoptable cats and dogs in your local animal shelters or rescues right now who would love to join your family.</p>
            <p>For over 150 years, the ASPCA has worked tirelessly to put an end to animal abuse and neglect. We are a national leader in animal rescue, protection and placement, and your tax-deductible donation will help fight cruelty and make a life-changing difference for animals across America. Thank you for making the ASPCA and the animals we serve a part of your life.</p>
            </Detail>
        </div>}





    </ContainerWithStyles>
  );
}

export default Home;