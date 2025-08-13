// Import Components and Files
import PreviousCareer from "./Components/PreviousCareer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";


// Import Hooks
import { Link, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />

      <nav className="linkContainer">
        {/* <div className="linkDiv"><Link className='links' to="/projects">Projects</Link></div>
        <div className="linkDiv"><Link className='links' to="/previous-career">Previous Career</Link></div> */}
      </nav>

      <body>
        <div className="routes">
          <Routes>
            <Route path="/previous-career" element={<PreviousCareer />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

      </body>

      {/* <footer><Footer /></footer> */}
    </div>
  );
}

export default App;
