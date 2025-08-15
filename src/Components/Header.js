
import { Link  } from "react-router-dom";


const Header = () => {
  
  return (
    <header>
      <ul>
        <li 
        className="linkDiv">
          <Link 
          className='links' 
          to="/">
            about
            </Link></li>
        <li 
        className="linkDiv">
          <Link 
          className='links' 
          to="/projects">
            portfolio
            </Link></li>
        <li 
        className="linkDiv">
          <Link 
          className='links' 
          to="/previous-career">
            previous career
            </Link></li>
      </ul>
    </header>
  );
};

export default Header;
