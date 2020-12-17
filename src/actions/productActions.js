import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
//   const res = await fetch("/api/products");
//   const data = await res.json();
//   console.log(data);
//   dispatch({
//     type: FETCH_PRODUCTS,
//     payload: data,
//   });
    console.log("came to the fetch products");
    fetch('http://localhost:5000/api/products')
    .then(res=>res.json())
    .then((res)=>{
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res,
            });
    })
};