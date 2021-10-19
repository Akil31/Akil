import React from 'react';
import{Button,TextField,Typography,Link,Grid,Paper,Dialog,
  DialogTitle,DialogContent,DialogContentText}from '@material-ui/core';
  import { makeStyles} from '@material-ui/core';

  const useStyles = makeStyles(theme=>({
    link:{
        align:"right",
        color:"white",
        textDecoration:'none'
      },
    }));
const Login=()=>{
  const classes =useStyles();

   const paperStyle={padding: 20,height:"70vh",width:300,margin:"20px auto"}
   const btnstyle={margin:'30px'}

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };

  return(
          <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
       <h2>SignUp</h2>
        </Grid>
      <TextField label="Email" type="text" placeholder="Email Address" fullWidth required />
      <TextField label="Password" type="password" placeholder="password" fullWidth required />

       <Button variant="outlined" onClick={handleClickOpen}>
       Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
             You Are the
       Doctor(Yes) Or Patiant(No)
          </DialogContentText>

          <Button variant="contained"  color="secondary" style={btnstyle}>
                      <Link href="\n" style={{textDecoration:'none'}}  className={classes.link}>Yes</Link>
            </Button>
          <Button variant="contained" color="secondary" style={btnstyle}>
                      <Link href="/ho" style={{textDecoration:'none'}} className={classes.link}>No</Link>
            </Button>

        </DialogContent>
        </Dialog>
          <Typography>
               <Link href="#">
         Forget Password!
             </Link>
       </Typography>
       <Typography> Do you have an account ?
       <Link href="/home">
          Sign In
       </Link>
                       <Typography>
             <Link href="#">
          Google Account
       </Link>
       </Typography>
       </Typography>
  </Paper>
        </Grid>
        
        );
}
export default Login;
