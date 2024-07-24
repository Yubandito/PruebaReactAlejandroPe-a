import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') {
      alert('La descripción es obligatoria');
      return;
    }
    addNote({
      title,
      description,
      important,
    });
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-header">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-content">
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-footer">
        <label>
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />
          Importante
        </label>
        <button type="submit">AGREGAR</button>
      </div>
    </form>
  );
}

export default NoteForm;