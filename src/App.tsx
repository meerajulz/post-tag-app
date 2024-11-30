import React from 'react';

import './App.css';
import InputMessage from './components/input-message/input-message.component';

function App() {
  return (
    <main className="container mx-auto p-4">
      <header className="App-header">
        <h1>Medical Report Auto-Complete</h1>
      </header>
      <div className="container mx-auto p-4">
        <InputMessage />;
      </div>
    </main>
  );
}

export default App;
