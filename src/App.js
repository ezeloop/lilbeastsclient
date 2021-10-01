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

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background: #BDE4F4;  /* fallback for old browsers */
  @media (max-width: 420px) {
  padding: 0;
  margin: 0;
  height: 100%;
}
@media (max-width: 770px) {
  padding: 0;
  margin: 0;
  height: 100%;
}
@media (max-width: 1440px) {
 height: 100%;
  }

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
            <div className="container mt-5">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pets" component={Pets} />
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/login" component={SignIn} />
              </Switch>
            </div>
          </Provider>
        </Router>
      </ThemeProvider>

    </Container>
  );
}

export default App;
