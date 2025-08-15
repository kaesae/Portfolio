import Resume from '../Media/kaeSaetern_resume.pdf'
import txt from '../Media/txt.json'

const PreviousCareer = () => {
  const text = txt
  const arrow = 'https://cdn-icons-png.flaticon.com/512/664/664866.png'

    return (
      <div className="home" styles={{ padding: '100px 30px;' }}>
      <div 
      className="l">previous career</div>
      <div 
      className="m">
          <p>{text.previousCareer[1]}</p>
          <br />
          <p>{text.previousCareer[2]}</p>
          <br />
          <p>{text.previousCareer[3]}</p>
          <br />
          <div
          className='flexrow'>
              <p className='readMore'>{text.previousCareer.readMore}</p>
              <img 
              style={{width:'40px', padding:'0 0 0 20px'}}
              className='invert'
              src={arrow} />
              </div>
              <br />
            <iframe className="videos" width="425" height="315"  src="https://www.youtube.com/embed/ksBawxHK-0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className="videos" width="425" height="315" src="https://www.youtube.com/embed/FSNmOoh-KWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          (Top video: Catch me playing basketball with a beloved student at 2:49! | Bottom video: My interview of part of the work we did.)

          </div>
      <div className="r">
      <p>{text.previousCareer.exp.title1}</p>
        <p>{text.previousCareer.exp.company1}</p>
        <p>{text.previousCareer.exp.years1}</p>
        <br />
        <br />
        <p>{text.previousCareer.exp.title2}</p>
        <p>{text.previousCareer.exp.company2}</p>
        <p>{text.previousCareer.exp.years2}</p>
        <br />

      </div>
  </div>
      // <div className="previousCareerComponent">
      //   <body className='previousCareerBody'>
      //     {/* Paragraph 1 */}
      //     <span className="previous-career-first-letter">P</span>reviously, I was the Founder and Owner of Valence LLC.
      //     My knack for languages led me to take multiple language courses in college: 3 years of Spanish, 1 year of Japanese, and 1 year of American Sign Language.
      //     In 2017, I began working with The Literacy and Language Center, LLC., a well-known private clinic that provided remedial-grade services, before graduating
      //     with a BA in Communicative Disorders and Minor in Special Education in 2018.
      //     <br />
      //     <br />

      //     {/* Paragraph 2 */}
      //     <span className="previous-career-first-letter">W</span>hile applying my academic skills and knowledge to the beginning of my career of working with students
      //     with academic delays from low-income households, I'd strongly and passionately argue that I have done some of the most fulfilling work I will ever do in my life.
      //     <br />
      //     <iframe className="videos" width="425" height="315"  src="https://www.youtube.com/embed/ksBawxHK-0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      //     <iframe className="videos" width="425" height="315" src="https://www.youtube.com/embed/FSNmOoh-KWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      //     <br />
      //     (Top video: Catch me playing basketball with a beloved student at 2:49! | Bottom video: My interview of part of the work we did.)
      //     <br />
      //     <br />

      //     {/* Paragraph 3 */}
      //     <span className="previous-career-first-letter">2</span> years, 2 promotions, and 4 job titles later, the clinic had to unfortunately close their doors.
      //     I saw an opportunity and decided to start a business continuing the amazing work I had been doing. In April 2019, Valence LLC was formed and has been
      //     going strong well into the pandemic. After making a full transition to tech in 2024, I closed Valence after 5 years.
      //     <br />
      //     <br />
      //   </body>
      // </div>
    );
  };
  
  export default PreviousCareer;