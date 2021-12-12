import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/styles';

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
    }
}))

function Header(props){
    const classes = styles();
    return (
    <React.Fragment>    
    <ElevationScroll>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        <img className={classes.logo} src={logo} alt="logo"/>
        </Toolbar>
    </AppBar>
     </ElevationScroll>
     <div className={classes.toolbarMargin}/> 
     </React.Fragment>
    );
}

export default Header;