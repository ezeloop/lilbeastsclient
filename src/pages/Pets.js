import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PetCard from '../components/Card';
import { getAllPetsAction, getPetsPaginationAction } from '../redux/actions/pets';
import {Pagination, Stack, Typography} from '@mui/material';
import styled from 'styled-components';
import { ContainerWithStyles } from '../styles/Container';

const PetsContainer = styled.div`
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  background: transparent;
  color: white;
`
const ContainerPagination = styled.div`
max-width: 300px;
color: white;
background-color: white;
display: grid;
justify-content: 'center';
`

const Pets = () => {

  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getPetsPaginationAction((page * 4) - 4))
    //eslint-disable-next-line
  }, [page])

  useEffect(() => {
    dispatch(getAllPetsAction())
    //eslint-disable-next-line
  }, [])

  const petsAvailable = useSelector((state) => state.pets.petsforpage)
  const cantPags = useSelector((state) => state.pets.cantPags)
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
          <PetsContainer>

            {petsAvailable.length === 0 ? <p>There is no available pets :C</p> : (
              petsAvailable.map(petAvailable => (
                <PetCard
                  key={petAvailable._id}
                  data={petAvailable}
                />
              ))
            )}
          </PetsContainer>
          <ContainerPagination>
            <Stack spacing={2}>
              <Typography>Page: {page}</Typography>
              <Pagination count={cantPags} page={page} onChange={handleChange} />
            </Stack>
          </ContainerPagination>
        </div>}
    </ContainerWithStyles>
  );
}

export default Pets;