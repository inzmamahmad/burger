import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import topimg from './asset/top.jpg';
import bottomimg from './asset/bottom.jpg';
import lettuseimg from './asset/lettuse.jpg';
import tomatoimg from './asset/tomato.jpg';
import cheeseimg from './asset/cheese.jpg';
import meatimg from './asset/meat.jpg';
import Sdata from './Sdata';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Meat from './Meat';
import Lettuce from './Lettuce';
const Incdec=()=>{
    const [count,setcount]= useState(0);
    
    const [gradiant,setgradiant]= useState("No Ingrediants");

const [lecttuce,setlecttuce]= useState(0);
const [lecttuceA,setlecttuceA]= useState([]);
const [bacon,setbacon]= useState(0);
const [baconA,setbaconA]= useState([]); 
const [cheese,setcheese]= useState(0);
const [cheeseA,setcheeseA]= useState([]);
const [meat,setmeat]= useState(0);
const [meatA,setmeatA]= useState([]);


const incLettuce=()=>{
    setgradiant("");
    setcount(count+4);
    setlecttuce(lecttuce+1);
    setlecttuceA((oldval)=>{
        return [...oldval,lecttuce];
    });
};
const incBacon=()=>{
    setgradiant("");
    setcount(count+5);
    setbacon(bacon+1);
    setbaconA((oldval)=>{
        return [...oldval,bacon];
    });
};
const incChees=()=>{ 
    setgradiant("");
    setcount(count+6);
    setcheese(cheese+1);
    setcheeseA((oldval)=>{
        return [...oldval,cheese];
    });
};
const incMeat=()=>{
    setgradiant("");
    setcount(count+7);
    setmeat(meat+1);
    setmeatA((oldval)=>{
        return [...oldval,meat];
    });
};
{/*const incLettuce=()=>{


    setlecttuce(lecttuce+1);
};*/}
const decLettuce=(id)=>{
    if(count<=0){
        setgradiant("No Ingrediant");
    }
    if(lecttuceA.length>0)
    {
        lecttuceA.length--;
        setcount(count-4);
    }else{
        setlecttuce(0);
        alert('limit blew zero');
    }
    setlecttuceA(lecttuceA);
   
    };
    
        
       {/* const incBacon=()=>{
            setbacon(bacon+1);
        };*/}
        const decBacon=()=>{
            if(count<=0){
                setgradiant("No Ingrediant");
            }
            if(baconA.length>0)
            {
                baconA.length--;
                setcount(count-5);
            }else{
                setbacon(0);
                alert('limit blew zero');
            }
            setbacon(baconA);
            };
            
               
                /*{const incChees=()=>{
           
                    setcheese(cheese+1);
                };*/
               
                const decChees=()=>{
                    if(count<=0){
                        setgradiant("No Ingrediant");
                    }
                    if(cheeseA.length>0)
    {
        cheeseA.length--;
        setcount(count-6);
    }else{
        setcheeseA(0);
        alert('limit blew zero');
    }
    setcheeseA(cheeseA);
                    };
                   
                        
                       {/* const incMeat=()=>{
                            setmeat(meat+1);
                        };*/}
                        const decMeat=()=>{
                            
                            if(meatA.length>0)
                            {
                                meatA.length--;
                                setcount(count-7);
                            }else{
                                setmeatA(0);
                                if(count<=0){
                                    setgradiant("No Ingrediant");
                                }
                            }
                            setmeatA(meatA);
                            };
          
            
            
                           
return(
<>

<div className="main_div">
    <div className="center_div">
 <img src={topimg} height="75px" width="250px"></img>
 <div >
 {gradiant}
{ lecttuceA.map((intemval,index)=>{
     return <div><Lettuce key={index} id={index}/></div>
 })}
   
 { baconA.map((intemval,index)=>{
     return <div><Bacon key={index} id={index}/> </div>
 })}

 { cheeseA.map((intemval,index)=>{
     return <div><Cheese key={index} id={index}/></div>
 })}

 { meatA.map((intemval,index)=>{
     return <div> <Meat key={index} id={index}/> </div>
 })}

{/* <img src={lettuseimg} height="20px" width="250px"></img>
 </div>
 <div>
 <img src={tomatoimg} height="30px" width="250px"></img>
 </div>
 <div>
 <img src={cheeseimg} height="20px" width="250px"></img>
 </div>
 <div>
 <img src={meatimg} height="35px" width="250px"></img>*/}
 </div>
 <img src={bottomimg} height="75px" width="250px"></img>

 <p> Price is:{count}</p>
<div className="btn_div">

    <Button className="button_green" onClick={incLettuce}>More</Button>
    <Button className="button_red" onClick={decLettuce}>Less</Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incBacon}>More</Button>
    <Button className="button_red" onClick={decBacon}>Less</Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incChees}>More</Button>
    <Button className="button_red" onClick={decChees}>Less</Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incMeat}>More</Button>
    <Button className="button_red" onClick={decMeat}>Less</Button>
</div>
    </div>
</div>
</>
);
};
export default Incdec;