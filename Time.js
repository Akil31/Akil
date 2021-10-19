import React from 'react'
import {Button} from '@material-ui/core';
function Time() {
  const butStyle={color:"red"}
    return (
        <div>
         <Button style={butStyle}>10-11</Button>
         <Button>11-12</Button>
         <Button>12-1</Button>
         
        </div>
    )
}

export default Time;
