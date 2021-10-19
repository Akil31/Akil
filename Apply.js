import React from 'react'
import {Grid,Paper,TextField,Button,Link} from '@material-ui/core';

function Apply() {
    const paperStyle={padding: 20,height:"70vh",width:300,margin:"20px auto"}
    return (
        <div>
             <Grid>
      <Paper elevation={10} style={paperStyle} >
        <Grid align='center'>
       <h2>Apply</h2>
        </Grid>
      <TextField label="Name" type="text" placeholder="Enter Name" fullWidth required />
      <TextField label="Age" type="age" placeholder="Enter Age" fullWidth required />
      <TextField label="Contact" type="text" placeholder="Enter Number" fullWidth required />
      <TextField label="Email" type="Email" placeholder="Enter Email" fullWidth required />
      <TextField label="Time" type="time" placeholder="Enter Time" fullWidth required />
      <Link to href="/date" />

      <Button type="submit" color="secondery" variant="contained"  FullWidth>
        Submit </Button>
         </Paper>
         </Grid>
        </div>
    )
}

export default Apply;
