import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  
const styles = makeStyles(theme=>({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:'3em'
    },
    logo: {
        height:'7em'
    },
    logoContainer:{
      padding:'0',
      "&:hover":{
        backgroundColor: 'transparent'
      }
    },
    toolbarContainer:{
      marginLeft: 'auto'
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px"
    },
    button:{
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft:"50px",
      marginRight: "25px",
      height: "45px"
    }
}))

function Header(){
    const classes = styles();
    const [value,setValue] = useState(0);
    const handleChange = (e,v)=>{
      setValue(v);
    }

    useEffect(()=>{
      if(window.location.pathname==="/" && value !== 0){
        setValue(0);
      }else if(window.location.pathname==="/services" && value !== 1){
        setValue(1);
      }
      else if(window.location.pathname==="/revolution" && value !== 2){
        setValue(2);
      }
      else if(window.location.pathname==="/about-us" && value !== 3){
        setValue(3);
      }
      else if(window.location.pathname==="/contact-us" && value !== 4){
        setValue(4);
      }
      else if(window.location.pathname==="/estimate" && value !== 5){
        setValue(5);
      }
      
    },[value] )




    return (
    <React.Fragment>    
    <ElevationScroll>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)}>
        <img className={classes.logo} src={logo} alt="logo"/>
        </Button>
        <Tabs value={value} onChange={handleChange} className={classes.toolbarContainer}>
          <Tab className={classes.tab} component={Link} to="/" label="Home"/>
          <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
          <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
          <Tab className={classes.tab} component={Link} to="/about-us" label="About Us"/>
          <Tab className={classes.tab} component={Link} to="/contact-us" label="Contact Us"/>
        </Tabs>
        <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button} onClick={()=>setValue(5)}>
          Estimate
        </Button>
        </Toolbar>
    </AppBar>
     </ElevationScroll>
     <div className={classes.toolbarMargin}/> 
     </React.Fragment>
    );
}

export default Header;