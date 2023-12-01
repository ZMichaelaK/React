import "./App.css";
import "./Data/kings.json";
import Counter from "./components/Counter";
import KingSolution from "../src/components/KingSolution";
import CatFacts from "./components/CatFacts";
import AKing from "./components/AKing";
import PostRequest from "./components/PostRequest";

// react component called App
function App() {
  return (
    <div>
      <KingSolution />
      <PostRequest />
    </div>
  );
}

export default App;

// this goes in a div <MyButton />
//<YourButton />
//<TheirButton />
//<Counter/>
//  <CatFacts />
