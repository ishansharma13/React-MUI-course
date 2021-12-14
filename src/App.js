import React from 'react';
import Header from './components/ui/Header';
import theme from './components/ui/Theme';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
   
        <ThemeProvider theme={theme} >
        <BrowserRouter >
        <Header />
        
        <Switch>
        <Route exact path="/" component={()=><div>Home</div>} />
        <Route exact path="/services" component={()=><div>Services</div>} />
        <Route exact path="/revolution" component={()=><div>The Revolution</div>} />
        <Route exact path="/about-us" component={()=><div>About Us</div>} />
        <Route exact path="/contact-us" component={()=><div>Contact Us</div>} />
        <Route exact path="/estimate" component={()=><div>Estimate</div>} />
        <Route exact path="/swdev" component={()=><div>swdev</div>} />
        <Route exact path="/mobileapps" component={()=><div>mobileapps</div>} />
        <Route exact path="/webdev" component={()=><div>webdev</div>} />
        
        </Switch>
        </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;
