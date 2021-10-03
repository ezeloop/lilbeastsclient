import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Pets from './pages/Pets';
import About from './pages/About';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import store from './redux/store';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import SignIn from './pages/login';
import background from './images/hero2.jpg'

const Container = styled.div`
  text-align: center;
  margin:0;
  padding: 0;
  width: 100vw;
  height: 100%;
  background: #BDE4F4; 
  @media (max-width: 426px) {
  padding: 0;
  margin: 0;
  height: 100%;
}
@media (min-width: 770px) {
  padding: 0;
  margin: 0;
  height: 100%;
}
@media (max-width: 1440px) {
  padding: 0rem;
  margin: 0;
  }

`

const ContainerImage = styled.div `
  margin: 0;
  padding: 2rem;
  backgroundImage: url(${background})
`

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#F5FEFF',
      },
      secondary: {
        main: '#bfe9ff'
      }
    }
  })

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <Header />
            <ContainerImage style={{ backgroundImage: `url(${background})` }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pets" component={Pets} />
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/login" component={SignIn} />
              </Switch>
            </ContainerImage>
          </Provider>
        </Router>
      </ThemeProvider>

    </Container>
  );
}

export default App;
