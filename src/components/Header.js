import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, Toolbar, Typography, IconButton, Button} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import styled from 'styled-components';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux'

const Container = styled.div`
 width: 100vw;

  @media (min-width: 425px) {
  width: 100%;
}
`

const ContainerData = styled.div`
 width: 100%;

  @media (min-width: 425px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin:0;
}
`
const ContainerLinks = styled.div`
 width: 100%;

`
const Header = () => {
  const auth = useSelector((state) => state.auth.autenticated)

  return (
    <Container>
      <Box >
        <AppBar position="static">
          <Toolbar style={{ padding: 0 }}>
            <ContainerData>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <PetsIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Lil' Beasts - Animal Shelter
              </Typography>
              <ContainerLinks>
                <Link to={'/'} >
                  <Button variant="outlined" style={{ color: '#404969' }} startIcon={<HomeIcon />}>
                    Home
                  </Button>
                </Link>
                <Link to={'/pets'} >
                  <Button variant="outlined" style={{ color: '#404969' }} startIcon={<FavoriteIcon />}>
                    Pets
                  </Button>
                </Link>
                <Link to={'/aboutus'} >
                  <Button variant="outlined" style={{ color: '#404969' }} startIcon={<InfoIcon />}>
                    About us
                  </Button>
                </Link>
                <Link to={'/login'} >
                  <Button variant="outlined" style={{ color: '#404969' }} startIcon={<LoginIcon />}>
                    {auth ? 'logout' : 'login'}
                  </Button>
                </Link>
              </ContainerLinks>
            </ContainerData>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

export default Header;

