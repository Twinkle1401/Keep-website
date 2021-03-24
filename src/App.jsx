import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {


  const [addItem, setAddItem] = useState([]);

const addNote = (note) => {
setAddItem((prev) => {
  return [...prev,note];
});
  };

const onDelete = (Id) => {
  setAddItem((prev) => 
    prev.filter((curr, index) => {
      return index !== Id;
    })
  );
  };

  return <>
  <Header />
  <CreateNote passNote={addNote}/>
  

{addItem.map((curr, index) => {
  return <Note
    key={index}
    id={index}
    title={curr.title}
    content={curr.content}
    deleteItem={onDelete}
  />
})}

  <Footer />
  </>;
}





export default App;