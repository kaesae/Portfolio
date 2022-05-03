import Portrait from './../../Images/Portrait.jpeg';

const Profile = () => {
    return (
      <div className="profileComponent">
        <img className='portrait' src={Portrait} />
        <div className='name'>Kae Saetern</div>
        <div className='pronunciation'>kay SAY-turn</div>
        <div className='pronouns'>he/him || they/them</div>
      </div>
    );
  };
  
  export default Profile;