import React from 'react';
import Heading from './Heading';
import Images from './Images';
import Sdata from './Sdata';
function Brgcard(props){
    const abc=()=>{
    for(let i=0;i<3; i++){
<Images imgsrc={props.imgsrc}/>
    }
}
    return(
     <>
     <div className="cards">
     <div className="card">
    
     <button onClick="abc">click me</button>
  
     </div>
  
     </div>
     
     </>
    );

  }
  export default Brgcard;