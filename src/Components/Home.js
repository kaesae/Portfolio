import Resume from '../Media/kaeSaetern_resume.pdf'
import txt from '../Media/txt.json'
import { Routes, Route } from 'react-router-dom'
import PreviousCareer from './PreviousCareer'

const Home = () => {
    const linkedin = 'https://cdn-icons-png.flaticon.com/512/665/665212.png'
    const github = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    const download = 'https://brandeps.com/icon-download/D/Download-icon-vector-30.svg'
    const arrow = 'https://cdn-icons-png.flaticon.com/512/664/664866.png'
    const text = txt
    const flexRow = {display:'flex', flexDirection:'row'}


    return (
        <div className="home" styles={{ padding: '100px 30px;' }}>
            <div 
            className="l">about</div>
            <div 
            className="m">
                <p>{text.home[1]}</p>
                <p>{text.home[2]}</p>
                <br />
                <div
                style={flexRow}>
                    <p className='readMore'>Read more about my time in education</p>
                    <img 
                    style={{width:'40px', padding:'0 0 0 20px'}}
                    className='invert'
                    src={arrow} />
                    </div>
                </div>
            <div className="r">
                <a 
                    href="https://www.linkedin.com/in/kae-saetern/">
                    <img
                    className='invert'
                    src={linkedin}
                    />
                    LinkedIn</a>
                <a 
                    href="https://github.com/kaesae/">
                    <img
                    className='invert'
                    src={github}
                    />
                    GitHub</a>
                <a 
                    href={Resume} download='Kae-Saetern-Resume.pdf'>
                    <img
                    className='invert'
                    src={download}
                    />Resume</a>
            </div>
        </div>
    )
}

export default Home;