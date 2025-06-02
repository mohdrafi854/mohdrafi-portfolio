import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Hero from "./component/Hero";
import Project from "./component/Project";
import Technologies from "./component/Technologies";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project/>
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
