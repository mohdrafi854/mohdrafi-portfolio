import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/blog"} element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
