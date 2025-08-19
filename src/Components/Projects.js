import text from '../Media/txt.json'
import Card from './Card';
import data from '../Media/data.json'

const Projects = () => {
  const txt = text

  return (
    <div className="projects">
      <h2 className="title">Projects</h2>
      <div className='cardContainer'>
        {data.map(item => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Card 
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Projects;