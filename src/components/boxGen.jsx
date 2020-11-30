import React, { useState } from  'react';
import './box.css';


const BoxG = props => {


   
return(



      // 
       
        // </div>   
        <div class = "box">
        
        {Object.keys(props.cr).map(key => {
          return  <div  class = "smallbox" style={{ backgroundColor: props.cr[key] }} >   </div>   
         
        })}
    
      </div>
 
);

}

export default BoxG;