import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [change, setChange] = useState(false);

    const [note,setNote] =useState({
        title:"",
        content:""
    });

    const inputEvent =(event) => {
        
        const {name,value} =event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };
    

    const addEvent = () => {
props.passNote(note);
setNote({
    title:"",
    content:""
});
    };

    const ExpandIt = () => {
        setChange(true);
    };

    const shrink = () => {
        setChange(false);
    }

return (
 <>
<div className="main_note" onDoubleClick={shrink}>
<form>
{change?
    <input type="text" value={note.title} name="title" onChange={inputEvent} placeholder="Title" autoComplete='off' />
    :null}
    <textarea rows='' column='' value={note.content} name="content"  onChange={inputEvent} placeholder="Write a note..." 
    onClick={ExpandIt} />
    

    {change?
    <Button onClick={addEvent}>
<AddIcon className="plus_sign"/>
    </Button>
    :null}
</form>
</div>
</>);
}

export default CreateNote;