//useEffect(function,[dependencies])
/*On change of screen size show the width and height of screen */

import React,{useState,useEffect} from "react";

function CheckUseEffect(){
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);


  //It calls the addEventListener multiple times when we resize the screen.
  //window.addEventListener("resize",handleScreenChange);

  //we are going to add only one event Listener , when we do component mount.
  useEffect(()=>{
    window.addEventListener("resize",handleScreenChange);


    //for clean up , we have return statement here...
    //we will return a function, if there is no dependencies
    return () =>{
      //unmount //unsubscribe
      window.removeEventListener("resize",handleScreenChange);
    };
  },[]);


  useEffect(()=>{
    document.title = `Size: ${width} * ${height}`; 
  },[width,height]); //when my width n height change, change the title too

  function handleScreenChange(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(<>
      <p>Window width :{width}px</p>
      <p>Window Height :{height}px</p>
  </>);

};

export default CheckUseEffect;

