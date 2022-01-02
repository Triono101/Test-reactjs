import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { decrementWithCheckingAction, Increment } from "../../../App/CounterFeatures/actions";

const Counter = () => {
    let {count} = useSelector(state => state.counter)
    let dispatch = useDispatch();

    return(
        <div className="pertama">

                {/* Metode Biasa */}

            {/* <button onClick={() => dispatch({type: 'DEC', value: 1})}>-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => dispatch({type: 'INC', value: 1})}>+</button> */}

                {/* Metode Action creator  */}

            {/* <button onClick={() => dispatch(Decrement(1))}>-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => dispatch(Increment(1))}>+</button> */}

                {/* Metode Redux Thunk  */}

            <button className="btn112" onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '} <span>{count}</span> {' '}
            <button className="btn112" onClick={() => dispatch(Increment(1))}>+</button>
        </div >
    )
}

export default Counter;