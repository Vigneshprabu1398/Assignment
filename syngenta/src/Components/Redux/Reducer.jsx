import { Allaction } from "./Actiont_types"
const initialstate = {
  colors :[],
  circle :[
    {A:true,
     id:1,
     cvalue:true,},
    {B:true,
     id:2,
     cvalue:true,},
    {C:true,
     id:3,
     cvalue:true,},
    {D:true,
     id:4,
     cvalue:true,},
    {E:true,
     id:5,
     cvalue:true,}
    ],       
}

export const Circle_Reducer = (state = initialstate, { type, payload }) => {
  console.log(typeof payload);
  switch (type) {
      case Allaction.SET_CIRCLE:
        const Ncircle =state.circle.filter((ele) => {
          if (ele.id == payload && ele.cvalue === true) {
            ele.cvalue=false;
            return true;
          }
          if (ele.id == payload && ele.cvalue === false) {
            ele.cvalue= true;
            return true;
          }
           else {
            return true;
          }
        });
         return {
          ...state,
          circle:Ncircle,
        };        
      default:
      return state;
  }
};

export const Color_Reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
      case Allaction.SET_COLOR:
        if(state.colors.length<5){
           return { ...state,colors:state.colors.concat(payload),};
        }
        
      default:
      return state;
  }
};

