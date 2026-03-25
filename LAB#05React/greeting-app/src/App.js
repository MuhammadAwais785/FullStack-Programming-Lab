import React from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  const greetings = [
    { name: 'Sara', timeOfDay: 'morning', bgColor: '#fff6e5' },
    { name: 'Omar', timeOfDay: 'afternoon', bgColor: '#e8f8ff' },
    { name: 'Hassan', timeOfDay: 'evening', bgColor: '#f3e8ff' }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Greeting App</h1>
      </header>

      <main className="greeting-list">
        {greetings.map((g, i) => (
          <Greeting key={i} {...g} />
        ))}
      </main>
    </div>
  );
}

export default App;
