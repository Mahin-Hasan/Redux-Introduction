
//curring funciton
const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log("Current state => ", currentState);
    console.log("Action dispatched => ", action);

    next(action);//will not perform operation if next is not called 

    console.log("Updated  state => ", store.getState());

}

export default logger;