import { FETCH_PRODUCTS } from "../types";

export const productReducer = (state={},action)=>{
    console.log("in th product reducer");
    console.log(action.payload);
    switch(action.type){
        case FETCH_PRODUCTS:
            return {items:action.payload};
        default:
            return state;
    }
}