import { useDispatch } from "react-redux";
import { SetColor } from "../Redux/Action";

export const Color = () =>{
    const dispatch = useDispatch();
    for(var i=1; i<=6; i++){
    let temp = "#"+Math.floor(Math.random() * 0x1000000).toString(16);
    let obj={id:i,color:temp};
    dispatch(SetColor(obj));
    }
}