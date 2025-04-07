import { useState } from "react";
function Food(){
  const [fruit,setFruits] = useState(["Apple","Banana"]);
  const [newItem,setNewItem] = useState("");


  function handleItem(e){
      setNewItem(e.target.value);
  }

  function handleListItems(){
      setFruits(f => ([...f,newItem]));
      setNewItem("");
  }

  function handleRemoveFood(index){
        setFruits(fruit.filter((_,i)=> i !== index));
  }


  return(<>
      <h2>List of Food</h2>
      <ul>
        {fruit.map((val,index)=>(
          <li key={index} onClick={(e) => handleRemoveFood(index)}>{val}</li>
        ))}
      </ul>


      <div>
        <input type="text" placeholder="add items" value={newItem} onChange={handleItem}/>
        <button onClick={handleListItems}>Add To List</button>
      </div>
  </>)
}

export default Food;