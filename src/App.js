import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import {
  changeName,
  decrement,
  deleteCounter,
  increment,
  incrementByAmount,
} from "./Redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state)=> state.counter.name)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={()=> dispatch(changeName())} >change name</button>
         <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(incrementByAmount(10))}>
            Increment by 10
          </button>
          <h1>{count}</h1>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(deleteCounter())}>Restart</button>
        </div> 
      </div>
    </>
  );
}

export default App;
