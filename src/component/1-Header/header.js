import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
    const [isNavOpen, setIsNavOpen] = useState(false); // Handle mobile navbar

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("currentMode", newTheme);
        setTheme(newTheme);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="flex">
            {/* Hamburger icon for mobile */}
            <button onClick={toggleNav} className="menu icon-menu flex">
                {isNavOpen ? (
                    <FontAwesomeIcon icon={faTimes} /> // Close icon
                ) : (
                    <FontAwesomeIcon icon={faBars} />  // Hamburger icon
                )}
            </button>

            {/* Theme switch button */}
            <button onClick={toggleTheme} className="mode flex">
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>

            {/* Navbar for larger screens */}
            <Navbar expand="lg" className="allnav">
                <Container className="flex">
                    <Nav className="me-auto nav"> {/* Always visible on desktop */}
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/Blog">Articles</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Mobile dropdown menu (off-canvas) */}
            {isNavOpen && (
                <div className={`mobile-nav offcanvas show`}>
                    {/* Close button inside off-canvas menu */}
                    <button className="close-menu" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faTimes} /> {/* Close icon */}
                    </button>
                    <ul className="model">
                        <li><a href="/" onClick={toggleNav}>About</a></li>
                        <li><a href="/projects" onClick={toggleNav}>Projects</a></li>
                        <li><a href="/Blog" onClick={toggleNav}>Articles</a></li>
                        <li><a href="/contact" onClick={toggleNav}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
