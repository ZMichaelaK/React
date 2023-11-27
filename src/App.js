import "./App.css";
import Trainer from "./components/Trainer";
import Header from "./components/Header";
import Trainee from "./components/Trainee";
import Footer from "./components/Footer";
import Pet1 from "./components/pet1";

// react component called App
function App() {
  return (
    <div>
      <header></header>
      <Header />
      <h1>React App</h1>
      <p>geia</p>
      <p>sou</p>
      <Trainer name="Jordan H" age="29" specialism="software" />
      <Trainee name="Michaela" age="30" specialism="trainee" />
      <Footer name="Placeholder.name" age="0" specialism="none" />
      <Pet1 name="Arianna" age="1.5" specialism="cat" />
    </div>
  );
}

export default App;
