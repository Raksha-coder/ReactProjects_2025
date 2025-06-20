
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement ,reset ,increaseByAmount} from "./counterSlice";

export const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch(); // will dispatch from here and go to slice to change state

    //local state
    const [addcount,setAddcount] = useState(0);

    function HandleAddedCount(){
       const addValue = Number(addcount) || 0; //if the value is not number then it will take zero .
      dispatch(increaseByAmount(addValue))
    }
  return (
    <>
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>  {/*call the increment action from slice*/}
        <button onClick={() => dispatch(decrement())}>-</button>  
        <button onClick={() => dispatch(reset())}>reset count</button>
        <input type="text" onChange={(e) => setAddcount(e.target.value)} value={addcount} placeholder='enter counter value to add' />
        <button onClick={() => HandleAddedCount()}>Add Amount</button>
      </div>
    </section>
    </>
  )
}


/*
state is the entire Redux state tree.
state.counter accesses the counterSlice in your store.
.count grabs the actual count value.
*/
