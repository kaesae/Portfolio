import text from '../Media/txt.json'
import Card from './Card';
import data from '../Media/data.json'

const Projects = () => {
  const txt = text


  return (
    <div className="projectsComponent">
      <h2 className="title">Projects</h2>
      {data.map(item => (
        <Card 
          id={item.id}
          title={item.title}
          desc={item.desc}
          image={item.desc}
      />
        ))}


      {/* Project 4 */}
      {/* <div className="project-card5">
        <div className="project-title">Mien Dictionary</div>
        <div className="project-description"><span className="first-letter">P</span>assion Project #1. This application will serve as a reference for the language, history, and culture of the Iu Mien, which is a dying language and culture. I decided to start this project because I myself am Mien, and I've always wished to know more about my culture.</div>
        <img className="dictionaryPhoto" src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <br />
      </div> */}


    </div>
  );
};

export default Projects;