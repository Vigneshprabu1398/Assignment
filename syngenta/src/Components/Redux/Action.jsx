import { Allaction } from "./Actiont_types";

export const SetCircle = (ele)=>{
    return {
        type : Allaction.SET_CIRCLE,
        payload : ele
    };
}

export const SetColor = (payload)=>{
  return {
      type : Allaction.SET_COLOR,
      payload : payload
  };  
}
