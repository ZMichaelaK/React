import "./App.css";
import "./Data/kings.json";
import Counter from "./components/Counter";
import KingSolution from "../src/components/KingSolution";

// react component called App
function App() {
  return (
    <div>
      <KingSolution />
    </div>
  );
}

export default App;

// this goes in a div <MyButton />
//<YourButton />
//<TheirButton />
//<Counter/>
