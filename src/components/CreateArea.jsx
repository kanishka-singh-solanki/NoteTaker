import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(()=>{
    console.log(newNote);
  }, [newNote])

  function handleChange(event) {
    setNewNote({ ...newNote, [event.target.name]: event.target.value });
    // console.log(newNote);
  }

  function handleSubmit(event) {
    props.onAdd(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          value={newNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}> <AddIcon /> </button>
      </form>
    </div>
  );
}

export default CreateArea;
// export notes;
