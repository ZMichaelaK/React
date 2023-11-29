import { useState } from "react";
import Kings from "../Data/kings.json";
import King from "./King";

function KingSolution() {
  const [filter, setFilter] = useState("");

  console.log("Filter:", filter);
  const kingComponents = [];

  for (const king of Kings) {
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
      {kingComponents}
    </div>
  );
}

export default KingSolution;
