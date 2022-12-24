import React, {useRef} from 'react'
import './App.css';

function App() {

  let inputRef=useRef(null);

  function handleName(){
      inputRef.current.value="Aman"
      inputRef.current.style.color="black"
  }

  function handleNameRed(){
      inputRef.current.style.color="red"
  }

  function handleNameBlue(){
      inputRef.current.style.color="blue"
  }

  function handleErase(){
      inputRef.current.value=""
  }

  return (
    <div className="App">
      <h1>Demonstrating "useRef hook" in React</h1>
      <hr />
      <input id="inputField" class="inputField"type="text" ref={inputRef}/>
      <button id="button1" onClick={handleName}>Show my name</button>
      <button id="button2" onClick={handleNameRed}>Turn it red</button>
      <button id="button3" onClick={handleNameBlue}>Turn it blue</button>
      <button id="button4" onClick={handleErase}>Erase it</button>
    </div>
  );
}

export default App;
