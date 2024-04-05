import React, { useState, useRef } from "react";
import "./app.css";

function StickyNotesApp() {
  const [stickyNotes, setStickyNotes] = useState([]);
  const noteInputRef = useRef(null);

  function addNote() {
    const value = noteInputRef.current.value;
    if (value !== "") {
      setStickyNotes([...stickyNotes, value]);
      noteInputRef.current.value = "";
    }
  }

  function deleteNote(index) {
    const updatedNotes = [...stickyNotes];
    updatedNotes.splice(index, 1);
    setStickyNotes(updatedNotes);
  }

  return (
    <div className="container">
      <div className="input">
        <input
          ref={noteInputRef}
          type="text"
          placeholder="add your note here"
          style={{ padding: "10px" }}
        />
        <button onClick={addNote} style={{ padding: "10px" }}>
          Add Note
        </button>
      </div>
      <div className="stickyNotes">
        {stickyNotes.map((note, index) => (
          <div key={index} className="stickyNote">
            <span>{note}</span>
            <button
              onClick={() => deleteNote(index)}
              style={{ width: "25%", margin: "0 auto" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyNotesApp;
