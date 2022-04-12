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
      <div className="project-card1">
        <div className="project-title">Portfolio</div>
        <div className="project-description"><span className="first-letter">T</span>his project taught me about project planning, time management, and allowed me to create and entire website in just HTML, CSS, and JavaScript. It's unfinished and unrefined nature shows a contrast in my skills from when I started versus the portfolio you see today.</div>
        <br />
        <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
        <a href="https://github.com/kaesae/Portfolio-Project"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      </div>
      
      {/* Project 2 */}
      <div className="project-card2">
        <div className="project-title">COVID-19 Statistics API</div>
        <div className="project-description"><span className="first-letter"></span></div>
        <img className="covidPhoto" src="https://www.who.int/images/default-source/health-topics/health-financing/novelcoronavirus-optimized.jpg?sfvrsn=755458c4_12" />
        <br />
        <a href="https://kaesae.github.io/Project2-React/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
        <a href="https://github.com/kaesae/Project2-React"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      </div>

      
      {/* Proejct 3 */}
      <div className="project-card3">
        <div className="project-title">Full-Stack Group Application (MERN)</div>
        <div className="project-description"><span className="first-letter"></span></div>
        <div className="project-description">Project Description / Takeaways/ Group Work Flow / Conflicts</div>
        <br />
        <a href="https://lark-ga.github.io/my-health-client/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
        <a href="https://github.com/Lark-GA/my-health-client"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        <a href="https://github.com/Lark-GA/my-health-api"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      </div>


      {/* Project 4 */}
      <div className="project-card4">
        <div className="project-title">Merit</div>
        <div className="project-description"><span className="first-letter"></span></div>
        <br />
        <a href=""><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
        <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
      </div>


      {/* Project 5 */}
      <div className="project-card5">
        <div className="project-title">Mien Dictionary</div>
        <div className="project-description"><span className="first-letter"></span></div>
        <br />
      </div>


    </div>
  );
};

export default Projects;