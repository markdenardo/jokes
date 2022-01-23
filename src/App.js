import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const hook = () => {
    axios
      .get("https://cat-fact.herokuapp.com/facts/random")
      .then((response) => {
        setJoke(response.data.text);
      });
  };

  useEffect(hook, []);

  console.log(joke.setup);
  return (
    <div className="App">
      <ol>
        {" "}
        {joke}
        <button onClick={hook}>new joke?</button>
      </ol>
    </div>
  );
}

export default App;
