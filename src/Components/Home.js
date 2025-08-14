import Resume from '../Media/kaeSaetern_resume.pdf'

const Home = () => {
    return (
        <div className="home">
            <div className="l">about</div>
            <div className="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="r">
                <a href="https://www.linkedin.com/in/kae-saetern/">LinkedIn</a>
                <a href="https://github.com/kaesae/">GitHub</a>
                <a href={Resume} download='Kae-Saetern-Resume.pdf'>Resume</a>
            </div>
        </div>
    )
}

export default Home;