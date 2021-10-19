import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid,Paper,Avatar, Link,Box,Button,Card,CardMedia} from '@material-ui/core';
 
const useStyles = makeStyles(theme=>({
     link:{
         color:"black",
         textDecoration:'none',
             },
     }));

 function Booking() {
     const classes = useStyles();
    const paperStyle={padding:20, hight:"70vh" ,width:300,margin:"20px auto"}
    const boxStyle={fontFamily:"blod", margin:"10px auto"}
   const gridStyle={color:"yellow"}
   const butStyle={padding:"15px 30px", alienItem:'center'}
   const avaStyle= { padding:"50px" , width:"100px" ,hight:"1000px",}
    return (
         <div>
         <Button style={butStyle}>H.R Hospital</Button>
         <Button style={butStyle}>A.V.R Hospital</Button>
         <Button style={butStyle}>Banu Hospital</Button>
         <Button style={butStyle}>K.R Hospital</Button>
         <Button style={butStyle}>Red Hospital</Button>
         
        <Grid style={gridStyle}>
               
        <Paper elevation={10} style={paperStyle}>
     <h1 align='center'>Doctor</h1>

<Link to href="/img">
     <Avatar src="/Jimin.jpg" variant='rounded' style={avaStyle}/>
     </Link>

<Box align='center' style={boxStyle}>Name: Varun M.B.B.S</Box>
<Box align='center' style={boxStyle}>Age:31</Box>
<Box align='center' style={boxStyle}>Department:Scan</Box>
<Box style={boxStyle}>I'm Work in</Box>
    
<Button style={boxStyle} type="submit" color="secondery" variant="contained" FullWidth>
         <Link to href ="/apply" className={classes.link}>Apponiment</Link>
         </Button>
        </Paper>

        <Paper elevation={10} style={paperStyle}>
     <h1 align='center'>Doctor</h1>

<Link to href="/">
     <Avatar src="/Jimin.jpg" variant='rounded' style={avaStyle}/>
     
     </Link>

<Box align='center' style={boxStyle}>Dr.Varun M.B.B.S</Box>
<Box align='center' style={boxStyle}>10 Years Experieness</Box>
<Box align='center' style={boxStyle}>Department Of:Scan</Box>
<Box style={boxStyle}>I'm Work in</Box>
    
<Button style={boxStyle} type="submit" color="secondery" variant="contained" FullWidth>
         <Link to href ="/apply" className={classes.link} >Apponiment</Link>
         </Button>
        </Paper>

        <Paper elevation={10} style={paperStyle}>
     <h1 align='center'>Doctor</h1>

<Link to href="/">
     <Avatar src="/Jimin.jpg" variant='rounded' style={avaStyle}/>
     </Link>

<Box align='center' style={boxStyle}>Name: Varun M.B.B.S</Box>
<Box align='center' style={boxStyle}>Age:31</Box>
<Box align='center' style={boxStyle}>Department Of:Scan</Box>
<Box style={boxStyle}>I'm Work in</Box>
    
<Button style={boxStyle} type="submit" color="secondery" variant="contained" FullWidth>
         <Link to href ="/apply" className={classes.link} >Apponiment</Link>
         </Button>
        </Paper>

        <Paper elevation={10} style={paperStyle}>
     <h1 align='center'>Doctor</h1>

<Link to href="/">
     <Avatar variant='rounded' src="/Jimin.jpg" style={avaStyle}/>
     </Link>

<Box align='center' style={boxStyle}>Name: Varun M.B.B.S</Box>
<Box align='center' style={boxStyle}>Age:31</Box>
<Box align='center' style={boxStyle}>Department Of:Scan</Box>
<Box style={boxStyle}>I'm Work in</Box>
    

<Button style={boxStyle} type="submit" color="secondery" variant="contained" FullWidth>
         <Link to href ="/apply" className={classes.link} >Apply</Link>
         </Button>
        </Paper>
       
        <Card sx={{ maxWidth: 45 }}>
      <CardMedia
        component="img"
        height="140"
        image="/Jimin.jpg"
        alt="green iguana"
      />
      </Card>
      
        </Grid>
        </div>
    )
}

export default Booking;
