import './App.css';
import{BrowserRouter as Router,NavLink} from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import { makeStyles} from '@material-ui/core';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
import Booking from './Booking';
import Time from './Time';
import Apply from './Apply';
import Photo from './Photo';
import TopBar from './TopBar';
import React from 'react';


const useStyles = makeStyles(theme=>({
  link:{    
       fontFamily:'blod',
        fontSize:"30px",
        color:'white',
         textDecoration:'none',
        padding:"14px 16px",
        textAlign:"left",
       
       '&:hover':{
        background:'black',
        
       },
      },
  navlink:{
  backgroundColor:"blue",
  height:"48px"
  },
  })); 





  const App=()=> {
      const classes =useStyles();
      
  return(
    <Router>
               <div>
      
                       <nav className={classes.navlink}>

                <NavLink  to="/ho"  className={classes.link}>Home</NavLink>
                <NavLink  to="/Booking"  className={classes.link}>Appoinment</NavLink>
                <NavLink  to="/Login"  className={classes.link}>Login</NavLink>  
        
      </nav>
      </div>
           <Switch>
           <Route path="/ho" 
       component={Home} exact/>

       <Route path="/home" 
       component={Signin} exact/>

         <Route path="/up" 
       component={Home} exact/>
       
       <Route path="/login" 
       component={Login} exact/>

         <Route path="/booking" 
       component={Booking} exact/>

        <Route path="/time" 
       component={Time} exact/>
     
     <Route path="/img" 
       component={Photo} exact/>

<Route path="/apply" 
       component={Apply} exact/>

         </Switch>
         
        
      </Router>

  );
         
}

export default App;



