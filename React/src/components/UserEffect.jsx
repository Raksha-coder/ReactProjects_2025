/*
useEffect() = React Hook that tells React "DO SOME CODE WHEN" (PICK ONE)
              This component re-render
              This component mount
              The state of a value

useEffect(function,[dependencies])

1.useEffect(() => {}) //run after every re-render
2.useEffect(() => {},[])  //runs only on mount
3.useEffect(() => {},[value]) //runs on mount + when value changes


USES 
1. Event Listener
2. DOM Manipulation
3. Subscription (real-time updates)
4. Fetching Data from an API
5. Clean up when a component unmount

*/
import React, {useState,useEffect} from "react";

function UseEffect(){
  const [count,setCount] = useState(0);

  // useEffect(()=>{
  //   document.title = `Count: ${count}`;
  // });  //on re-render of an app

  // useEffect(()=>{
  //   document.title = `Count: ${count}`;
  // },[]); //like ngOnInit in angular

  useEffect(()=>{
    document.title = `Count: ${count}`;
  },[count]); //whenn only count variable changes => display the changes else hide

  function handleCountChange(){
    setCount(count+1);
  }

  return(
  <>
    <p>Count :{count}</p>
    <button onClick={handleCountChange}>Add</button>
  </>)
}

export default UseEffect;