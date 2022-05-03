// Import Components and Files
import PreviousCareer from "./Components/PreviousCareer/PreviousCareer";
import Languages from "./Components/Languages/Languages";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";

// CSS
import './AppCSS/PC.css'
import './AppCSS/Mobile.css'
import './AppCSS/Tablet.css'


// Import Hooks
import { Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Profile />

      <nav className="linkContainer">
        <div className="linkDiv"><Link className='links' to="/projects">Projects</Link></div>
        <div className="linkDiv"><Link className='links' to="/languages">Languages</Link></div>
        <div className="linkDiv"><Link className='links' to="/previous-career">Previous Career</Link></div>
      </nav>

      <body>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Languages />} />
            <Route path="/previous-career" element={<PreviousCareer />} />
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
