import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    return storedNotes;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1 className="title">Notas Rapidas</h1>
      <div className="content">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;