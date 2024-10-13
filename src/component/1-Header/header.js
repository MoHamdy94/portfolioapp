import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const [showModel, setshowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {

        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);




    return (
        <header className=" flex">
            {/* <button onClick={() => {
                setshowModel(true)
            }} className="menu icon-menu flex"> </button> */}

<button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("currentMode"));
            }} className="menu icon-menu flex">
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>


            <div />


            <Navbar expand="lg" className="allnav">
      <Container className="flex">
       
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="Blog">Articles</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>




            {/* <nav>
            <ul className="flex">
    <li><Link to="/">About</Link></li>
    <li><Link to="projects">Projects</Link></li>
    <li><Link to="Blog">Articles</Link></li>    
    <li><Link to="contact">Contact</Link></li>
</ul>
            </nav> */}


            {/* <button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                setTheme(localStorage.getItem("currentMode"))
            }} className="mode flex"
            >


                {theme === "dark" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
            </button> */}

<button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("currentMode"));
            }} className="mode flex">
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </button>

            {showModel && (<div className="fixed">



                <ul className="model">
                    <li>
                        <button className="icon-close" onClick={() => {
                            setshowModel(false)
                        }} />


                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="./projects">Projects</a></li>
                    <li><a href="#speaking">Speaking</a></li>
                    <li><a href="./contact">Contact</a></li>
                </ul>

            </div>)}
        </header>
    );
}

export default Header;