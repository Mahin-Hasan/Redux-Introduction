import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; //can be named anything because export default is used


const store = configureStore({
    reducer: {
        counter: counterReducer
    },

})

export default store;