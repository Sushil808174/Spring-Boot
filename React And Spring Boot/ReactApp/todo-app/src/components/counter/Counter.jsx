import { useState } from 'react';
// import {PropTypes} from 'prop-types'
import './Counter.css'


export default function Counter(){

    const [count,setCount] = useState(0);

    function incrementCountWithParent(by){
        setCount(count + by);
    }
    function decrementCountWithParent(by){
        setCount(count - by);
    }

    function resetButton(){
        setCount(0)
    }

    return(
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCountWithParent} decrementMethod={decrementCountWithParent}/>
            <CounterButton by={2} incrementMethod={incrementCountWithParent} decrementMethod={decrementCountWithParent}/>
            <CounterButton by={5} incrementMethod={incrementCountWithParent} decrementMethod={decrementCountWithParent}/>
            <div><button className="resetBtn" onClick={resetButton}>Reset</button></div>
        </>
    )
}

function CounterButton({by,incrementMethod,decrementMethod}){

    // function increment(){
    //     incrementMethod(by);
    // }
    // function decrement(){
    //     decrementMethod(by);
    // }

    return(
        <div className="Counter">
            <div>
                <span><button className="counterBtn" onClick={()=>incrementMethod(by)}>+{by}</button></span>
                <span><button className="counterBtn" onClick={()=>decrementMethod(by)}>-{by}</button></span>
            </div>
            
            
        </div>
    )
}

