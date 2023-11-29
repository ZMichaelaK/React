import "./App.css";
import Header from "./components/Header";
import kings from "./Data/kings.json";
import KingSolution from "./components/KingSolution";

function App() {
  console.log("List of kings:", KingSolution);
  const kingConst = [];
  for (const king of kings) {
    console.log("List of Kings", king);
    kingConst.push(
      <KingSolution nm={king.nm} cty={king.cty} hse={king.hse} yrs={king.yrs} />
    );
  }
  return (
    <div>
      <header>{kingConst}</header>
    </div>
  );
}

export default App;
