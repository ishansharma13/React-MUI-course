import React,{useState,useEffect, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';


const options = [{displayName:"Services",link:"/services"},{displayName:"Software Development",link:"/swdev"},{displayName:"Web Development",link:"/webdev"},{displayName:"Mobile Development",link:"/mobileapps"}]

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
        marginBottom:'3em',
        [theme.breakpoints.down('md')]:{
          marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]:{
          marginBottom: '1.25em'
        }
    },
    logo: {
        height:'8em',
        [theme.breakpoints.down('md')]:{
          height: '7em'
        },
        [theme.breakpoints.down('xs')]:{
          height: '5.5em'
        }

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
    },
    menu:{
      backgroundColor: theme.palette.common.blue,
      color:'white',
      borderRadius:"0px"
    },
    menuItem:{
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover":{
        opacity:1
      }
    }
}))

function Header(){
    const classes = styles();
    const [value,setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [IsOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleChange = (e,v)=>{
      setValue(v);
    }
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setIsOpen(true);
    };
    
    const handleSelectedItemClick = (event,i) =>{
      setAnchorEl(event.currentTarget);
      setIsOpen(false);
      setSelectedIndex(i);
    }
    const handleClose = () => {
      setAnchorEl(null);
      setIsOpen(false);
    };






    useEffect(()=>{
      switch(window.location.pathname){
        case "/":
          if (value!==0){
            setValue(0);
          }
          break;
        case "/services":
          if (value!==1){
            setValue(1);
            setSelectedIndex(0);
          }
          break;
        case "revolution":
          if (value!==2){
            setValue(2);
          }
          break;
        case "/about-us":
          if (value!==3){
            setValue(3);
          }
          break;
        case "/contact-us":
          if (value!==4){
            setValue(4);
          }
          break;
        case "/estimate":
          if (value!==5){
            setValue(5);
          }
          break;
        case "/swdev":
          if (value!==1){
            setValue(1);
            setSelectedIndex(1);
          }
          break;
        case "/webdev":
          if (value!==1){
            setValue(1);
            setSelectedIndex(2);
          }
          break;
        case "/mobileapps":
          if (value!==1){
            setValue(1);
            setSelectedIndex(3);
          }
          break;
        default:
          break;
      }
      
    },[value] )

    const tabs = (<Fragment>
              <Tabs value={value} onChange={handleChange} className={classes.toolbarContainer}>
          <Tab className={classes.tab} component={Link} to="/" label="Home"/>
          <Tab aria-controls={anchorEl?"simple-menu":undefined} aria-haspopup={IsOpen} className={classes.tab} component={Link} to="/services" onMouseOver={event=>handleClick(event)}  label="Services"/>
          <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
          <Tab className={classes.tab} component={Link} to="/about-us" label="About Us"/>
          <Tab className={classes.tab} component={Link} to="/contact-us" label="Contact Us"/>
        </Tabs>
        <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button} onClick={()=>setValue(5)}>
          Estimate
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={IsOpen}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
      > 
        {options.map((option,index)=>(
          <MenuItem classes={{root: classes.menuItem}} selected={index===selectedIndex && value===1} onClick={(event)=>{handleSelectedItemClick(event,index); handleClose();setValue(1);}} component={Link} to={option.link}>{option.displayName}</MenuItem>
        ))};
        
        
      </Menu>
    </Fragment>);


    return (
    <React.Fragment>    
    <ElevationScroll>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)}>
        <img className={classes.logo} src={logo} alt="logo"/>
        </Button>
        {matches ? null : tabs}
        </Toolbar>
    </AppBar>
     </ElevationScroll>
     <div className={classes.toolbarMargin}/> 
     
     </React.Fragment>
    );
}

export default Header;