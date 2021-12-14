import React,{useState} from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import theme from './components/ui/Theme';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
   
        <ThemeProvider theme={theme} >
        <BrowserRouter >
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        
        <Switch>
        <Route exact path="/" component={()=><div style={{height: "2000px"}}>Home</div>} />
        <Route exact path="/services" component={()=><div style={{height: "2000px"}}>Services</div>} />
        <Route exact path="/revolution" component={()=><div style={{height: "2000px"}}>The Revolution</div>} />
        <Route exact path="/about-us" component={()=><div style={{height: "2000px"}}>About Us</div>} />
        <Route exact path="/contact-us" component={()=><div style={{height: "2000px"}}>Contact Us</div>} />
        <Route exact path="/estimate" component={()=><div style={{height: "2000px"}}>Estimate</div>} />
        <Route exact path="/swdev" component={()=><div style={{height: "2000px"}}>swdev</div>} />
        <Route exact path="/mobileapps" component={()=><div style={{height: "2000px"}}>mobileapps</div>} />
        <Route exact path="/webdev" component={()=><div style={{height: "2000px"}}>webdev</div>} />
        
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;
