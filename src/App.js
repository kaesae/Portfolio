// Import Components and Files
import AboutMe from "./Components/AboutMe/AboutMe";
import Languages from "./Components/Languages/Languages";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";

// CSS
import './App.css'

// Import Hooks
import { Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Profile />

      <nav className="linkContainer">
        <div className="linkDiv"><Link className='links' to="/">Home</Link></div>
        <div className="linkDiv"><Link className='links' to="/projects">Projects</Link></div>
        <div className="linkDiv"><Link className='links' to="/languages">Languages</Link></div>
        <div className="linkDiv"><Link className='links' to="/previous-career">Previous Career</Link></div>
      </nav>

      <body>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previous-career" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </div>

      </body>

      <footer><Footer /></footer>
    </div>
  );
}

export default App;
