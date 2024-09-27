import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes((notes) => {
      return notes.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
