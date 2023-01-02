import React, { useReducer } from 'react'

// declare initial state outside the component
const initialState = {count: 0}
// declare the reducerFunction to manage the state 
const reducerFunction = (state, action)=>{
  switch(action.type){
    case "increase":
      return {
        count: state.count + 1
      };

    case "decrease" :
      return {
        count: state.count - 1
      };

    default:
      return state

  }

}


const Ureducer = () => {

  const [state, dispatch] = useReducer(reducerFunction, initialState)
 

  const increaseCount = ()=>{
    // dispatch is to tell the conditon given for the state to change 
    dispatch({
      type: "increase"
    })
  }

  const decreaseCount = ()=>{
    dispatch({
      type: "decrease"
    })
  }


  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default Ureducer