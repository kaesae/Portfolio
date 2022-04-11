import Merit from "./Projects/Merit";
import HealthTracker from "./Projects/HealthTracker";
import Covid from "./Projects/Covid";
import Portfolio1 from "./Projects/Portfolio1";
import './Projects.css'

const Projects = () => {
  return (
    <div className="projectsComponent">
      <h2 className="title">Projects</h2>
      
      {/* Project 1 */}
      <div>1: Portfolio</div>
      <br />
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="" /></a>
      <a href="https://github.com/kaesae/Portfolio-Project"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      <br />
      <br />
      <br />
      
      {/* Project 2 */}
      <div>2: COVID-19 Statistics API</div>
      <br />
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="" /></a>
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      <br />
      <br />
      <br />
      
      {/* Proejct 3 */}
      <div>3: Full-Stack Group Application (MERN)</div>
      <br />
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="" /></a>
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      <br />
      <br />
      <br />
      
      {/* Project 4 */}
      <div>Project Description / Takeaways/ Group Work Flow / Conflicts</div>
      <div>4: Merit</div>
      <br />
      <a href=""><img className="little-logo" src="" /></a>
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
    </div>
  );
};

export default Projects;