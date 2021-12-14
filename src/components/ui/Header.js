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
import { IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { SwipeableDrawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
    },
    drawerContainer:{
      marginLeft:'auto',
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    drawerIcon:{
      height:'40px',
      width:'40px',
      color: 'white'
      
    },
    drawerList:{
      backgroundColor: theme.palette.common.blue,
      
    },
    drawerListItem:{
      ...theme.typography.tab,
      color:'white',
      opacity: 0.7,
      "&:hover":{
        opacity:1
      }
    },
    drawerEstimate:{
      backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected:{
      opacity:1
    },
    appbar:{
      zIndex: theme.zIndex.modal+1
    }
}))

function Header(props){
    
    const classes = styles();
    const {value,setValue,selectedIndex, setSelectedIndex} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [IsOpenDrawer,setIsOpenDrawer] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);
    
    const MainOptions = [{displayName:"Home",link:"/",activeIndex:0},
  {displayName:"Services",link:"/services",activeIndex:1,ariaControls:anchorEl?"simple-menu":undefined,ariaPopup:IsOpen,mouseOver:event=>handleClick(event)},
  {displayName:"The Revolution",link:"/revolution",activeIndex:2},
  {displayName:"About Us",link:"/about-us",activeIndex:3},
  {displayName:"Contact Us",link:"/contact-us",activeIndex:4},
  {displayName:"Estimate",link:"/estimate",activeIndex:5}]
    const options = [{displayName:"Services",link:"/services",activeIndex:1,selectedIndex:0},{displayName:"Software Development",link:"/swdev",activeIndex:1,selectedIndex:1},{displayName:"Web Development",link:"/webdev",activeIndex:1,selectedIndex:2},{displayName:"Mobile Development",link:"/mobileapps",activeIndex:1,selectedIndex:3}]  
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
      [...options,...MainOptions].forEach(route=>{
        switch(window.location.pathname){
          case `${route.link}`:
            if(value!==route.activeIndex){
            setValue(route.activeIndex);
            if(route.selectedIndex && route.selectedIndex !== selectedIndex){
              setSelectedIndex(route.selectedIndex);
            }
            }
            break;
          default:
            break; 
        }
      });
    },[value,selectedIndex,options,MainOptions] )

    const getClass=(name,index)=>{
      let finalClasses = [];
      if (name.toLowerCase() === "estimate"){
        finalClasses.push(classes.drawerEstimate);
      }
      if(value === index){
        finalClasses.push(classes.drawerItemSelected);
      }
      return finalClasses.length>0?finalClasses.join(' '):null;
    };

    const tabs = (<Fragment>
              <Toolbar />
              <Tabs value={value} onChange={handleChange} className={classes.toolbarContainer}>
              {MainOptions.map((option)=>(
                <Tab key={option.displayName} className={classes.tab} component={Link} to={option.link} label={option.displayName} aria-controls={option.ariaControls} aria-haspopup={option.ariaPopup} onMouseOver={option.mouseOver}/>
              ))}

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
        style={{zIndex: 1302}}
      > 
        {options.map((option,index)=>(
          <MenuItem key={option.displayName} classes={{root: classes.menuItem}} selected={index===selectedIndex && value===1} onClick={(event)=>{handleSelectedItemClick(event,index); handleClose();setValue(1);}} component={Link} to={option.link}>{option.displayName}</MenuItem>
        ))};
        
        
      </Menu>
    </Fragment>);

    const drawer = (
    <Fragment>
      <Toolbar />
      <SwipeableDrawer classes={{paper: classes.drawerList}} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={IsOpenDrawer} onOpen={()=>setIsOpenDrawer(true)} onClose={()=>setIsOpenDrawer(false)}>
      <div className={classes.toolbarMargin}/> 
      <List disablePadding>
        {MainOptions.map((option) => (
    
          <ListItem divider button key={option.displayName} selected={value===option.activeIndex} className={getClass(option.displayName,option.activeIndex)} component={Link} to={option.link} onClick={()=>{setIsOpenDrawer(false);setValue(option.activeIndex);}}>
            <ListItemText className={classes.drawerListItem} primary={option.displayName} />
          </ListItem>
    ))}
      </List>
      
      </SwipeableDrawer>
      <IconButton className={classes.drawerContainer} onClick={()=>setIsOpenDrawer(!IsOpenDrawer)}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>)



    return (
    <React.Fragment>    
    <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
        <Toolbar disableGutters >
        <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)}>
        <img className={classes.logo} src={logo} alt="logo"/>
        </Button>
        {matches ? drawer : tabs}
        </Toolbar>
        
    </AppBar>
    
     </ElevationScroll>
     <div className={classes.toolbarMargin}/> 
     
     </React.Fragment>
    );
}

export default Header;