
import "./footer.css";

const Footer = () =>{
    return ( <footer className="flex">

        <ul className="flex">
            <li>
                <a href="#bout">About</a> 
            </li>
            <li>
                <a href="projects">Projects</a> 
            </li>
            <li>
                <a href="#Speaking">Speaking</a> 
            </li>
            <li>
                <a href="#Uses">Uses</a> 
            </li>
        </ul>

        <p>© 2023 Spencer Sharp. All rights reserved.</p>



    </footer>

    );
} 

export default Footer;