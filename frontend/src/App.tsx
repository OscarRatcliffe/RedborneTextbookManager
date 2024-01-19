import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [localResponse, setlocalResponse] = useState("Placeholder text");

  async function getData() {
    await fetch('http://127.0.0.1:5000/Test')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      setlocalResponse(data.OtherTest)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
  });
  }

  getData()

  return (
    <div className="App">
      <header className="App-header">
          <p>{localResponse}</p>
      </header>
    </div>
  );
}

export default App;
