import React, { useContext, useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Note from "./Note";
import { CredentialsContext } from '../App';

const CreateNote = (props) => {
    const [change, setChange] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [credentials] =useContext(CredentialsContext);

    const persist =async (newNotes) => {
        const res =  await fetch("https://stable-notes.herokuapp.com/note", {
          mode: 'no-cors',
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              Authorization : `Basic ${credentials.username}:${credentials.password}`
            },
            body:JSON.stringify(newNotes)
          });
    
           const data=await res.json();
           if(res.status!==200 || !data){
             window.alert("Invalid Info");
             console.log("Invalid Info");
           }else {
            // window.alert("Note Created Successfully");
            console.log("Note Created Successfully");
           }
    }

    useEffect( async() => {
        const res =  await fetch("https://stable-notes.herokuapp.com/note", {
          mode: 'no-cors',
            method:"GET",
            headers:{
              "Content-Type": "application/json",
              Authorization : `Basic ${credentials.username}:${credentials.password}`
            },
          });

          const data=await res.json();
           setNotes(data);
    }, [])

    const addNote =async (e) => {
        e.preventDefault();
        if(!title || !content)
        return;
        const newNote= {id: uuidv4(), title:title, content:content};
        const newNotes=[...notes, newNote];
        setNotes(newNotes);

        setTitle("");
        setContent("");

        persist(newNotes);
    }

    const onDelete =async (id) => {
        console.log("in ondelete", id);
       
        const res =  await fetch("https://stable-notes.herokuapp.com/deleteNote", {
          mode: 'no-cors',
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              Authorization : `Basic ${credentials.username}:${credentials.password}`
            },
            body:JSON.stringify({id})
          });
        
        const result =  await fetch("https://stable-notes.herokuapp.com/note", {
            mode: 'no-cors',
            method:"GET",
            headers:{
              "Content-Type": "application/json",
              Authorization : `Basic ${credentials.username}:${credentials.password}`
            },
          });

          const data=await result.json();
           setNotes(data);
    }
   

    const ExpandIt = () => {
        setChange(true);
    };

    const shrink = () => {
        setChange(false);
    }

    return (
        <>
        <div className='createNote'>
            <div className="main_note_container">
                <div className="main_note shadow-lg" 
                    onDoubleClick={shrink}>
                    <form onSubmit={addNote}>
                        {change ?
                        <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title" autoComplete='off' />
                        : null }
                        <textarea rows='' column='' value={content} name="content" onChange={(e) => setContent(e.target.value)} placeholder="Write a note..."
                        onClick={ExpandIt}
                        />


                         {change ? 
                        <button className='btn' type="submit">
                            <AddIcon className="plus_sign" />
                        </button>
                         :null 
                        } 

                    </form>
                </div>
            </div>

           <div className='notes'>
            {notes.map((curr, index) => {
                return <Note
                    key={index}
                    id={curr._id}
                    title={curr.title}
                    content={curr.content}
                    deleteItem={onDelete}
                />
            })}
            </div>
</div>


        </>);
}

export default CreateNote;