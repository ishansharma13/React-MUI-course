import React,{useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import GridLayout from './gridLayout';
import Grid from '@material-ui/core/Grid';
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";


    



const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]:{
            width: '21em',
        },
        [theme.breakpoints.down('xs')]:{
            width: '15em',
        }
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
          height: "2.5em",
          width: "2.5em"
        }
      },
      socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
          right: "0.6em"
        }
      }
}))

export default function Footer(props){
    const classes = useStyles();
    return (<footer className={classes.footer}>
        <GridLayout value={props.value} setValue={props.setValue} selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex}/>
        <img src={footerAdornment} className={classes.adornment} alt="Footer Adornment"/>
        <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
            <Grid item component={"a"} href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank">
              <img alt="facebook logo" src={facebook} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank">
              <img alt="instagram logo" src={instagram} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank">
            <img alt="twitter logo" src={twitter} className={classes.icon} />
            </Grid>
        </Grid>
        </footer>);
}