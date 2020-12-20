import React from 'react';
import './App.css';
import {
 Link,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
 root: {
  flexGrow: 1,
 },
 menuButton: {
  marginRight: theme.spacing(2),
 },
 title: {
  flexGrow: 1,
 },
 link: {
  color: 'white'
 }
}));

const Navigation = (props) => {
 const classes = useStyles();

 return <React.Fragment>
  <AppBar position="static">
   <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
     <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
     Bienvenido a mi blog
    </Typography>
   </Toolbar>
  </AppBar>


 </React.Fragment>
}
export default Navigation;
