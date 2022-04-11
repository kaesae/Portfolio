import Merit from "./Projects/Merit";
import HealthTracker from "./Projects/HealthTracker";
import Covid from "./Projects/Covid";
import Portfolio1 from "./Projects/Portfolio1";
import './Projects.css'

const Projects = () => {
  return (
    <div className="projectsComponent">
      <h1 className="title">Projects</h1>
      <div>1: Portfolio</div>
      <img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" />
      <div>2: COVID-19 Statistics API</div>
      <img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" />

      <div>3: Full-Stack Group Application (MERN)</div>
      <img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" />

      <div>Project Description / Takeaways/ Group Work Flow / Conflicts</div>
      <div>4: Merit</div>
      <img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" />
    </div>
  );
};

export default Projects;