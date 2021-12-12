import React from 'react';
import Header from './components/ui/Header';
import theme from './components/ui/Theme';
// import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
   
        <ThemeProvider theme={theme} >
        <Header>
        My Application
        </Header>
        Hello
        </ThemeProvider>
  );
}

export default App;
