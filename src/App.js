// Import Components and Files
import AboutMe from "./Components/AboutMe/AboutMe";
import Languages from "./Components/Languages/Languages";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer/Footer";

// CSS
import './App.css'

// Import Hooks
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div className="App">

      
      <nav className="linkContainer">
        <div className="linkDiv"><Link className='links' to="/">Home</Link></div>
        <div className="linkDiv"><Link className='links' to="/projects">Projects</Link></div>
        <div className="linkDiv"><Link className='links' to="/languages">Languages</Link></div>
        <div className="linkDiv"><Link className='links' to="/previous-career">Previous Career</Link></div>
      </nav>

      <body>
        <div className="routes">
          <Profile />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previous-career" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </div>
      </body>

      <Footer />
    </div>
  );
}

export default App;
