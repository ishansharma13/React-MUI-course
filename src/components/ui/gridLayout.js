import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        position:'absolute'
    },
    link: {
        color:'white',
        fontFamily: 'Arial',
        fontSize:'0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem:{
        margin:'3em'
    }
  }));

export default function GridLayout(props){
    const handleValue= (newValue)=>{
        props.setValue(newValue);
    };

    const handleSelectedIndex = (selectedIndex)=>{
        props.setSelectedIndex(selectedIndex);
    }
    const classes = useStyles();
    return (
        <Hidden mdDown>
        <Grid className={classes.mainContainer} justify="center" container direction="row" spacing={3}>
            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(0);}} to="/">
                Home
                </Grid>
                
            </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3} >
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(1);handleSelectedIndex(0);}} to="/services">
                Services
                </Grid>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(1);handleSelectedIndex(1);}} to="/swdev">
                Software Development
                </Grid>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(1);handleSelectedIndex(2);}} to="/webdev">
                Web Development
                </Grid>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(1);handleSelectedIndex(3);}} to="/mobileapps">
                Mobile Development
                </Grid>
            </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(2);}} to="/revolution">
                The Revolution
                </Grid>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(3);}} to="/about-us">
                About Us
                </Grid>
                <Grid item className={classes.link} component={Link} onClick={()=>{handleValue(4);}} to="/contact-us">
                Contact Us
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Hidden>
    );
}