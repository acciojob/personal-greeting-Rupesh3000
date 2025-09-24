import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleGreeting = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleGreeting} />
      {inputValue && `Hello, ${inputValue}!`}
      
    </div>
  );
};

export default App;
