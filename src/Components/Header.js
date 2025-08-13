import PreviousCareer from "./PreviousCareer";
import Projects from "./Projects";

import { Link  } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <ul>
        <li>about</li>
        <li>portfolio</li>
        <li className="linkDiv"><Link className='links' to="/projects">projects</Link></li>
        <li className="linkDiv"><Link className='links' to="/previous-career">previous career</Link></li>

      </ul>
    </header>
  );
};

export default Header;
