import Portrait from './../Images/home-image.jpg';

const Hero = () => {
    return (
      <div className="hero1">
        <img className='portrait' src={Portrait} />
        {/* <div className='name'>Kae Saetern</div>
        <div className='pronunciation'>kay SAY-turn</div>
        <div className='pronouns'>he/him || they/them</div> */}
      </div>
    );
  };
  
  export default Hero;