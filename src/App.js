import React from 'react';
import Note from './Note';
import notes from './notes';
import './styles.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>My Notes App</h1>
      </header>
      <main>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default App;