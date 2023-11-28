import "./App.css";
import Header from "./components/Header";
import Zwa from "./components/Zwa";
import Footer from "./components/Footer";
import Pet1 from "./components/pet1";
import zwa from "./Data/zwa.json

// react component called App
function App() {
  console.log("lista:", Zwa);
  const petLog = [];
  for (const pet of zwa) {
    console.log("list of stoixeia", pet);
    petLog.push(
      <Zwa name={pet.name} age={pet.age} specialism={pet.specialism} />
    );
  }
  return (
    <div>
      <header>
        <Header />
        <h1>React App</h1>
        <p>geia</p>
        <p>sou</p>
        <Zwa age={30} name="kurios muths" specialist="patata" />
        {petLog}
      </header>
    </div>
  );
}

export default App;
