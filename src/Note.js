import React from 'react';

const Note = ({ note }) => {
  // Convert content into an array of lines
  const contentLines = note.content.split('\n');

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <ul>
        {contentLines.map((line, index) => (
          <li key={index}>{line}</li> // Each line becomes a list item
        ))}
      </ul>
      <small>Created on: {note.createdDate}</small>
      {note.image && <img src={note.image} alt={note.title} />}
    </div>
  );
};

export default Note;
