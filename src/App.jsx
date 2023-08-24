import { useEffect, useState } from "react";
import adviceData from "./adviceData";
import { Axios } from "axios";
import "./App.css";

const App = () => {
  const [slip, setSlip] = useState({});

  const [get, setGet] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slip);
        setSlip(data.slip);
      });
  }, [get]);

  return (
    <>
      <div className="container">
        <p># Advice {slip.id}</p>
        <h1>{slip.advice}</h1>
        <button onClick={() => setGet((prev) => !prev)}>Show advice</button>
      </div>
    </>
  );
};

export default App;
