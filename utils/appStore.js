import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";

//note: store have it own reducer this reducer combine the slice reducer for each slice we have a different reducer
const appStore = configureStore({
    reducer:{
      cart:cartReducer
    }
})

export default appStore
