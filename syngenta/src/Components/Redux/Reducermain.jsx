import { combineReducers } from "redux";
import { Circle_Reducer, Color_Reducer } from "./Reducer";

export const reducers = combineReducers({
    Circles : Circle_Reducer,
    Colors : Color_Reducer,
}) 