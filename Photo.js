import React from 'react';


function Photo() {
    const phoStyle={margin:"300px",top:"40px"}
    return (
       <div>
          <img src={require('./Image/Jimin.jpg').default} style={phoStyle}/>
       </div>
    )
}

export default Photo;
