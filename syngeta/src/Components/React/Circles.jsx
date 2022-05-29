import { useDispatch, useSelector } from "react-redux";
import "../Css/Circle.css"
import { SetCircle, SetColor } from "../Redux/Action";

export const Circle = () =>{
    const circle = useSelector((state)=>state.Circles.circle);  
    const dispatch = useDispatch();
    console.log(circle)
   const handleChange =(e)=>{
       dispatch(SetCircle(e.id))
   }
    return(
        <div id="main">
            <div id="left">
                <h2>left</h2>
                {circle.map((e)=>{
                    if(e.cvalue===false){
                        return(
                            <div id="circle"
                             key={e.id}
                             onClick={()=>handleChange(e)}>
                                 <p>{e.id}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div id="right">
                <h2>right</h2>
                {circle.map((e)=>{
                    if(e.cvalue===true){
                        return(
                            <div id="circle"
                             key={e.id}
                             onClick={()=>{handleChange(e)}}>
                             <p>{e.id}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}