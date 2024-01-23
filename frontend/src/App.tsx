import React from 'react';
import './App.css';
import { useState } from 'react';


function App() { 

  const [localResponse, setlocalResponse] = useState("Placeholder text");
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

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

  function updateAPI() {

    fetch('http://127.0.0.1:5000/Update', {
      method: "POST",
      body: JSON.stringify({
        toUpdate: inputValue
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    setlocalResponse(inputValue)
  }

  getData()

  return (
    <div className="App">
      <header className="App-header">
          <p>{localResponse}</p>
          <input value={inputValue} onChange={handleInputChange} id="UpdateInfo" placeholder="Please enter update info"></input>
          <button onClick={updateAPI}>Submit</button>
      </header>
    </div>
  );
}

export default App;
