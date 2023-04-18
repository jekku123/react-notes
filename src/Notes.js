import React from 'react';
import './Notes.css';

const Notes = ({ notes, deleteNote }) => {
  return (
    <div className='notes'>
      {notes.map((note) => {
        return (
          <div key={note.id} className='note'>
            <button onClick={() => deleteNote(note.id)}>x</button>
            <p>
              Firstname: <span>{note.firstname}</span>
            </p>
            <p>
              Lastname: <span>{note.lastname}</span>
            </p>
            <p>
              Phone: <span>{note.phone}</span>
            </p>
            <p>
              Role: <span>{note.role}</span>
            </p>
            <p>
              Message: <span>{note.message}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
