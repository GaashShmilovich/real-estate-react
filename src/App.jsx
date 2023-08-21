import Companies from "./cmps/Companies/Companies";
import Header from "./cmps/Header/Header";
import Hero from "./cmps/Hero/Hero";
import { Residencies } from "./cmps/Residencies/Residencies";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
