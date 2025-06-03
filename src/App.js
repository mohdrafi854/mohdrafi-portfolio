import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Hero from "./component/Hero";
import Project from "./component/Project";
import Technologies from "./component/Technologies";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project/>
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
