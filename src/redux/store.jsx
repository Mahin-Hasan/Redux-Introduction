import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; //can be named anything because export default is used
import logger from "./middlewares/Logger";
// import logger from "redux-logger";
//use curring funciton concept to make custom logger 


const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

//this store is connected in main.jsx
export default store;