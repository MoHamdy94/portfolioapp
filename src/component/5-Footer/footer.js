
import "./footer.css";

const Footer = () =>{
    return ( <footer className="flex">

        <ul className="flex">
            <li>
                <a href="/">About</a> 
            </li>
            <li>
                <a href="projects">Projects</a> 
            </li>
            <li>
                <a href="Blog">Articles</a> 
            </li>
            <li>
                <a href="contact">Contact</a> 
            </li>
        </ul>

        <p>© 2024 G3d Portfolio Project. All rights reserved.</p>



    </footer>

    );
} 

export default Footer;