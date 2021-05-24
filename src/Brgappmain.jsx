import React from 'react';
import BrdNavebar from './BrdNavebar';
import Brgapp from './Brgapp';
import BrgLogin from './BrgLogin';
import {Switch,Route,Redirect} from "react-router-dom";
const Brgappmain=()=>{
    return(
<>

<BrdNavebar/>
<Switch>
    <Route exact path="/" component={Brgapp}/>
    <Route exact path="/login" component={BrgLogin}/>
    <Redirect to="/"></Redirect>
</Switch>
</>
    );
}
export default Brgappmain;