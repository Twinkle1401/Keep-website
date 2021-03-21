import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp'

const ToDoList = (props) => {
const [item, setItem] = useState("");
const [newItem, setNewItem]= useState([]);

const itemEvent =(event) => {
 setItem(event.target.value);

}
const listOfItems= () =>{
    setNewItem((prev) => {
        return [...prev, item];
    })
    setItem("");
}

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> ToDo List </h1>
                    <input type="text" placeholder="Add an item" 
                        onChange={itemEvent} value={item}
                    />
                    <Button className="btn" onClick={listOfItems}><AddIcon /></Button>
                    <ol>
                        {newItem.map((currVal, index) =>{
                            return <ListComp key={index} text={currVal}/>
                        }) }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoList;