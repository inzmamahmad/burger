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
const Brgpractice=()=>{
    const [lecttuce,setlecttuce]= useState(0);
const [bacon,setbacon]= useState(0);
const [cheese,setcheese]= useState(0);
const [meat,setmeat]= useState(0);
const incLettuce=()=>{
    setlecttuce(lecttuce+1);
};
const decLettuce=()=>{
    if(lecttuce>0)
    {
    setlecttuce(lecttuce-1);
    }else{
        setlecttuce(0);
        alert('limit blew zero');
    }
    };
    
        
        const incBacon=()=>{
            setbacon(bacon+1);
        };
        const decBacon=()=>{
            if(bacon>0)
            {
                setbacon(bacon-1);
            }else{
                setbacon(0);
                alert('limit blew zero');
            }
            };
            
               
                const incChees=()=>{
                    setcheese(cheese+1);
                };
                const decChees=()=>{
                    if(cheese>0)
                    {
                        setcheese(cheese-1);
                    }else{
                        setcheese(0);
                        alert('limit blew zero');
                    }
                    };
                   
                        
                        const incMeat=()=>{
                            setmeat(meat+1);
                        };
                        const decMeat=()=>{
                            if(meat>0)
                            {
                                setmeat(meat-1);
                            }else{
                                setmeat(0);
                                alert('limit blew zero');
                            }
                            };
                           
                            let burgerLettuce=[];
                            for(let i=0; i<1;i++){
                                burgerLettuce.push(<img key={burgerLettuce.length} src={lettuseimg} alt="pic" height="30px" width="30px"></img>);
                            }
                            return burgerLettuce;
                            let burgerBacon=[];
                            for(let j=0; j<1;j++){
                                burgerBacon.push(<img key={burgerBacon.length} src={tomatoimg} alt="pic" height="30px" width="30px"></img>);
                            }
                            return burgerBacon;
                            let burgerChees=[];
                            for(let k=0; k<1;k++){
                                burgerChees.push(<img key={burgerChees.length} src={cheeseimg} alt="pic" height="30px" width="30px"></img>);
                            }
                            return burgerChees;
                            let burgerMeat=[];
                            for(let l=0; l<2;l++){
                                burgerMeat.push(<img key={burgerMeat.length} src={meatimg} alt="pic" height="30px" width="30px"></img>);
                            }
                            return burgerMeat;
    return(
<>
  <p> {this.burgerLettuce}
    {this.burgerBacon}
    {this.burgerChees}
    {this.burgerMeat}
</p> 

    <div className="btn_div">
    <Button className="button_green" onClick={incLettuce}><AddIcon/></Button>
    <Button className="button_red" onClick={decLettuce}><DeleteIcon/></Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incBacon}><AddIcon/></Button>
    <Button className="button_red" onClick={decBacon}><DeleteIcon/></Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incChees}><AddIcon/></Button>
    <Button className="button_red" onClick={decChees}><DeleteIcon/></Button>
</div>

<div className="btn_div">
    <Button className="button_green" onClick={incMeat}><AddIcon/></Button>
    <Button className="button_red" onClick={decMeat}><DeleteIcon/></Button>
</div>
</>
    );
}
export default Brgpractice; 