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

  return (
    <div className="App">
      <div>Cat Facts</div>
      <div className="joke">{joke}</div>
      <button onClick={hook}>new cat fact?</button>
    </div>
  );
}

export default App;
