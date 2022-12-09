// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Rodney Bowen" />

            <div className='header__content'>
                <h1>Hi, I'm Rodney Bowen</h1>
                <p>Blockchain/WEB3 Developer</p>
                <a href="mailto:rtbowen@outlook.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;