import React, { useReducer } from 'react'

const DashboardReducer = () => {

    const initialState = 0;

    const reducer = (state, action) => {

        switch (action.type) {
            case "Increment":
                return state + 1;
                break;
            case "Decrement":
                return state - 1;
                break;
            case "Reset":
                return 0;
                break;
            default:
                break;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)

    return (<div>
        Count: {count} <br />
        <button onClick={() => { dispatch({"type":"Increment"}) }}>Increment</button> 
        <button onClick={() => { dispatch({"type":"Decrement"}) }}>Decrement</button> 
        <button onClick={() => { dispatch({"type":"Reset"}) }}>Reset</button>
    </div>)

}
export default DashboardReducer