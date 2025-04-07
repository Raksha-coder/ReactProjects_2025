import { useState } from "react";
function TodoList() {
  const [list, setList] = useState("");
  const [totalList, setTotalList] = useState([]);

  function handleAddList() {
    if (list.trim() !== "") {
      //it will not add the empty item in a list
      setTotalList((t) => [...t, list]);
      setList("");
    }
  }

  function handleItemChange(e) {
    setList(e.target.value);
  }

  function taskDelete(index) {
    setTotalList(totalList.filter((_, i) => i != index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      //first approach, if you want to move the item to the top directly
      // const otherListOtems = totalList.filter((_,i)=> i != index);
      // const indexItem = totalList.filter((_,i)=> i == index);

      // setTotalList([indexItem,...otherListOtems]);

      //second approach,moving the index one step up using array destructuring.
      const updateTasks = [...totalList];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTotalList(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < totalList.length - 1) {
      //if you want to move any item to the last position
      // const otherListOtems = totalList.filter((_,i)=> i != index);
      // const indexItem = totalList.filter((_,i)=> i == index);

      // setTotalList([...otherListOtems,indexItem]);

      //second approach, moving the index one step down using array destructuring.
      const updateTasks = [...totalList];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTotalList(updateTasks);
    }
  }

  return (
    <>
      <h2>To Do List</h2>

      <div className="input-container">
        <input
          type="text"
          value={list}
          placeholder="Enter a task.."
          onChange={(e) => handleItemChange(e)}
        />
        <button onClick={handleAddList}>Add</button>
      </div>

      <ul className="todo-list">
        {totalList.map((item, index) => (
          <li key={index}>
            <span className="text">{item}</span>
            <button onClick={() => taskDelete(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>👆</button>
            <button onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
