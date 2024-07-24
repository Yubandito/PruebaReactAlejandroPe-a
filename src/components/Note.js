import React from 'react';
import './Note.css';

function Note({ note, index, deleteNote }) {
  return (
    <div className={`note ${note.important ? 'important' : ''}`}>
      <div className="note-header">
        <h2 className="note-title">{note.title || 'Sin título'}</h2>
      </div>
      <div className="note-content">
        <p className="note-description">{note.description}</p>
      </div>
      <button className="delete-button" onClick={() => deleteNote(index)}>Eliminar</button>
    </div>
  );
}

export default Note;