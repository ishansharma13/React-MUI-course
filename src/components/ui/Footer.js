import React,{useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import GridLayout from './gridLayout';


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
    }
}))

export default function Footer(props){
    const classes = useStyles();
    return (<footer className={classes.footer}>
        <GridLayout value={props.value} setValue={props.setValue} selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex}/>
        <img src={footerAdornment} className={classes.adornment} alt="Footer Adornment"/></footer>);
}