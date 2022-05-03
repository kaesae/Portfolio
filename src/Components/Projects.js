
const Projects = () => {
  return (
    <div className="projectsComponent">
      <h2 className="title">Projects</h2>

      {/* Project 1 */}
      <div className="project-card1">
        <div className="project-title">Portfolio</div>
        <div className="project-description"><span className="first-letter">T</span>his project focused on project planning, time management, and showcases an entire website in just HTML, CSS, and JavaScript. It's unfinished and unrefined nature showcases a progression of skills.</div>
        <img className="portfolioPhoto" src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
        <br />
        <div className="logos">
            <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
            <a href="https://github.com/kaesae/Portfolio-Project"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="project-card2">
        <div className="project-title">COVID-19 Statistics API</div>
        <div className="project-description"><span className="first-letter">F</span>etchin' API. This project hit home as I underwent a coding bootcamp with General Assembly during the pandemic. When deciding on which API to call upon, I reflected back on how much I've changed due to the pandemic and shelter-in-place. From introverted to extroverted, home-body to athlete, and a career in special education to software engineering.</div>
        <img className="covidPhoto" src="https://www.who.int/images/default-source/health-topics/health-financing/novelcoronavirus-optimized.jpg?sfvrsn=755458c4_12" />
        <br />
        <div className="logos">
            <a href="https://kaesae.github.io/Project2-React/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png"></img></a>
            <a href="https://github.com/kaesae/Project2-React"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        </div>
      </div>

      
      {/* Project 3 */}
      <div className="project-card3">
        <div className="project-title">My Health App</div>
        <div className="project-description"><span className="first-letter">M</span>y first full-stack (MERN) and group application. This project taught me group work flow, how to navigate merging and opinion-related conflicts, </div>
        <img className="healthPhoto" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
        <br />
        <div className="logos">
            <a href="https://lark-ga.github.io/my-health-client/"><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
            <a href="https://github.com/Lark-GA/my-health-client"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
            <a href="https://github.com/Lark-GA/my-health-api"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        </div>
      </div>


      {/* Project 4 */}
      <div className="project-card4">
        <div className="project-title">Merit</div>
        <div className="project-description"><span className="first-letter"></span></div>
        <img className="meritPhoto" src="https://images.unsplash.com/photo-1613826488249-b67eba609bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2228&q=80" />
        <br />
        <div className="logos">
            <a href=""><img className="little-logo" src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png" /></a>
            <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
            <a href="https://kaesae.github.io/Portfolio-Project/"><img className="little-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" /></a>
        </div>
      </div>


      {/* Project 5 */}
      <div className="project-card5">
        <div className="project-title">Mien Dictionary</div>
        <div className="project-description"><span className="first-letter">P</span>assion Project #1. This application will serve as a reference for the language, history, and culture of the Iu Mien, which is a dying language and culture. I decided to start this project because I myself am Mien, and I've always wished to know more about my culture.</div>
        <img className="dictionaryPhoto" src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <br />
      </div>


    </div>
  );
};

export default Projects;