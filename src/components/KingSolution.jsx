import { useState, useEffect } from "react";
import King from "./King";
import axios from "axios";

function KingSolution() {
  const [filter, setFilter] = useState("");
  const [kings, setKings] = useState("");
  function getKings() {
    axios
      .get(
        "https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json"
      )
      .then((response) => {
        setKings(response.data);
      });
  }
  useEffect(() => {
    getKings();
  }, []);

  const kingComponents = [];

  for (const king of kings) {
    console.log("King:", king);
    if (
      filter.length === 0 ||
      king.nm.toLowerCase().includes(filter.toLowerCase())
    ) {
      kingComponents.push(
        <King
          key={king.nm + "" + king.yrs}
          nm={king.nm}
          cty={king.cty}
          hse={king.hse}
          yrs={king.yrs}
        />
      );
    }
  }
  function handleChange(event) {
    console.log("Event:", event);
    console.log("Target:", event.target);
    console.log("Value:", event.target.value);
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Kings</h2>
      <input
        type="text"
        placeholder="Enter text here"
        value={filter}
        onChange={handleChange}
      />

      {kings === "" && (
        <button onClick={() => getKings()}>
          {" "}
          Click for the list of Kings{" "}
        </button>
      )}
      {kingComponents}
    </div>
  );
}

export default KingSolution;
