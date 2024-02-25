import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByValue
} from "../redux/features/counter/counterSlice";

const Counter = () => {

    // const count = useSelector((state) => state.counter.count); //old style
    const { count } = useSelector((state) => state.counter); //advanced style
    const dispatch = useDispatch();


    console.log(count);
    return (
        <div>
            {/* here 5 is the passed payload */}
            <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button>
            <br />
            {/* increment function must be called be careful as redux will not give you any error || increment()*/}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;