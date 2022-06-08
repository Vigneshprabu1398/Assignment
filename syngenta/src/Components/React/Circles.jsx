import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Circle.css"
import { SetCircle } from "../Redux/Action";

export const Circle = () =>{
    const circle = useSelector((state)=>state.Circles.circle);
    const color = useSelector((state)=>state.Colors.colors);

    const [input, setInput] = useState();

    const handleInput = e => {
        setInput(e.target.value);
	};
    const dispatch = useDispatch();

    const handleChange1 =()=>{
        console.log(input);
        dispatch(SetCircle(input))
    }
    
   const handleChange =(e)=>{
       dispatch(SetCircle(e.id))
   }
    if(color!==null){
        return(
            
            <div >
                <input type="text" 
                       placeholder="Enter a number to shoot"
                       onChange={handleInput}></input><br></br>
                <button  onClick={()=>{handleChange1()}}>Shoot</button>
                <div id="main">
                <div id="left">
                    <h2>empty div</h2>
                    {circle.map((e)=>{
                        if(e.cvalue===false){
                                return(
                                    <div>
                                        <button id="shoot"
                                        key={e.id}
                                        style={{backgroundColor:`${color[e.id-1].color}`}}
                                        onClick={()=>handleChange(e)}>
                                            <p>{e.id}</p>
                                    </button>
                                    </div>
                                )
                        }
                    })}
                </div>
                <div id="right">
                    <h2>5 circles</h2>
                    {circle.map((e)=>{
                        if(e.cvalue===true){
                                return(
                                    <div>
                                        <button id="shoot"
                                        key={e.id}
                                        style={{backgroundColor:`${color[e.id-1].color}`}}
                                       >
                                            <p>{e.id}</p>
                                    </button>
                                    </div>
                                )
                        }
                    })}
                </div>   
                </div>
            </div>
        )
    }
}