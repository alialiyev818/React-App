import React from 'react';

const Note = ({ note: { title, content, createdDate, image } }) => {
  const contentLines = content.split('\n');

  // Event handler for click event
  const handleClick = () => {
    alert(`Title: ${title}\nCreated on: ${createdDate}`);
  };

  return (
    <div className="note" onClick={handleClick}>
      <h2>{title}</h2>
      <ul>
        {contentLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <small>Created on: {createdDate}</small>
      {image && <img src={image} alt={title} />}
    </div>
  );
};

export default Note;