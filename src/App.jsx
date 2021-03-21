import React, {useState} from 'react';
import ToDoList from './ToDoList';

const App = () => {

const [inputList, setInputList] = useState("");
const [items, setItems] = useState([]);

const itemEvent= (event) => {
  setInputList(event.target.value);
}

const listOfItems = () => {
  setItems((prev) => {
    return [...prev,inputList];
  });
  setInputList("");
}

const deleteItems =(id) => {
  setItems((prev) => {
return prev.filter((curr,index) => {
return index !== id;
})
  });
}

  return (
<>
<div className="main_div">
<div className="center_div">
<h1> ToDo List</h1>
<input type="text" placeholder="Add item" 
onChange={itemEvent} value={inputList}
/>
<button onClick={listOfItems}> + </button>

<ol>
  {/* <li> {inputList} </li> */}
  {items.map( (itemVal, index) => {
    return <ToDoList 
    key={index} 
    id={index}
    text= {itemVal}
    onSelect= {deleteItems}
    />
  })}
</ol>
</div>
</div>
</>
  );
}

export default App;