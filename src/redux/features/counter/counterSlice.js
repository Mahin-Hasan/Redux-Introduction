import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        incrementByValue: (state, actions) => {
            state.count = state.count + actions.payload; //payload is very important if we want to give something from the component and it will recieve the value
        }
    },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions; //careful to export all reducer action 

export default counterSlice.reducer; // this is used in store.jsx 