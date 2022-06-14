import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

   const evt = (e) => {
    e.preventDefault();
   }

    const deleteNote = () => {
props.deleteItem(props.id);
    }; 



return ( <>
<div className="note shadow">
<form onSubmit={(e) => {evt(e); deleteNote();}}>
<h1>{props.title}</h1>
<p> {props.content} </p>
<button className='btn' type="submit">
<DeleteOutlineIcon className='deleteIcon'/>
</button>
 </form>
</div>
</>
);
}

export default Note;