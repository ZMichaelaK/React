import { useState } from "react";
import King from "./King";
import axios from "axios";

function AKing() {
  const [fact, setFact] = useState("");

  function getFact() {
    axios
      .get(
        "https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json"
      )

      .then((response) => {
        console.log(response);
        setFact(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFact("there was an error, please try again");
      });
  }
  return (
    <div>
      <h1>Kings</h1>
      <p>{fact}</p>
      <button onClick={() => getFact()}> Get Fact </button>
    </div>
  );
}
export default AKing;
