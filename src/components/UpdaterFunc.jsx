/*
updater function is a function which paas as argument
to setState()  ex: setYear(arrow function);

allow for safe update based on previous state
used with multiple state updates and asynchronous functions

Good Practice to use updater function.
*/
import {useState} from 'react';
function UpdaterFunction(){
    const [count,setCount] = useState(0);

    //React Batches together multiple state for performace reason.
    function handleIncrement(){
      //setCount(count + 1);

      //takes the pending state to calculate next state
      //React put your updater function in a queue(waiting in line)
      //During the next render,it will call them in the same order.
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
    }

    function handleDecrement(){
      setCount(count - 1);
    }

    function handleReset(){
      setCount(0);
    }
  return(<>
    <h2>Count :{count}</h2>

    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>

  </>)
}

export default UpdaterFunction;