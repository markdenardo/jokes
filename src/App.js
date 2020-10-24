import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [joke, setJoke] = useState('');

  const hook = () => {
    axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then(response => {
        console.log(response)
        setJoke(response.data)
      })
  }

  useEffect(hook,[])

  console.log(joke.setup)
  return (
    <div className="App">
     <ol> {joke.setup}
      {joke.punchline}
      <button onClick={hook}>new joke?</button></ol>
    </div>
  );
}

export default App;
