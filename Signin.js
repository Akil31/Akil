import React from 'react'
import {Grid,Paper,TextField,Button,Link} from '@material-ui/core';

function Signin() {
 const paperStyle={padding:20, hight:"70vh" ,width:300,margin:"20px auto"}
 const btnstyle={margin:'8px 0' , alignitems:"center"}
 return (
    
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                <h1>Sign In</h1>
                </Grid>
               
                <TextField label="UserName" type="email" placeholder="Enter the username" fullWidth required />
      <TextField label="Password" type="password" placeholder="password" fullWidth required />
             
             
      <Button type="submit" color="secondary" variant="contained" style={btnstyle} FullWidth>
         <Link to href ="/up">Sign In</Link>
         </Button>
             </Paper>
        </Grid>
    )
}

export default Signin;
