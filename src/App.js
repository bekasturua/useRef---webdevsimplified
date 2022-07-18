import "./App.css";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState();
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}

export default App;
