import React, {useState, useEffect} from 'react';
import '../styles/navbar.css'
import linkedIn from '../assets/git.svg'
import instagram from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import { Link } from 'react-router-dom';
function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        
        <nav className={scrolled ? 'scrolled' : ""}>
            <img src='' alt='logo' />
            <div className='right-side'>
                <div className='links'>
                    <Link to='' className='link'>Inicio</Link>
                    <Link to='/tecnologías' className='link'>Tecnologías</Link>
                    <Link to='/proyectos' className='link'>Proyectos</Link>
                </div>
                <div className='icons'>
                    <a href='https://github.com/IvoJr11' id="github"><img src={github} alt='' /></a>
                    <a href='https://www.linkedin.com/in/ivo-pascal-r%C3%ADos/'><img src={linkedIn} alt='' /></a>
                    <a href='#'><img src={instagram} alt='' /></a>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;