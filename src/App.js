import React from 'react';
import logo from './logo.svg';
import './App.css';
import Journal from './pages/Journal';
import { Container, Grid, Paper } from '@material-ui/core';
import TopBar from './components/TopBar';
import HideOnScroll from './components/HideOnScroll';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
      <TopBar />
      <Container maxWidth="lg">
        <br />
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
        <Grid item xs={12}>
            <Journal />
          </Grid>
          {/* <Grid item xs={6}>
            <Journal />
          </Grid>
          <Grid item xs={6}>
            <Journal />
          </Grid> */}
        </Grid>
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
