import devAnimation from "../../../src/animation/Animation - 1727671971933.json";
import Lottie from "lottie-react";
import "./hero.css";

const Hero = () =>{
    return (
        <section className="hero flex">

            <div className="left-section ">

                <div className="parent-avatar flex">
                    <img src="./depi.jfif" className="avatar" alt="" />
                    <div className="icon-verified"></div>
                </div>


                <h1 className="title">Software Developer, Front End Developer, React Library.</h1>
                <p className="sub-title">I'm Mahmoud, a software developer and entrepreneur based in New York City.
                    I'm the founder and CEO of Planetaria, where we develop
                    technologies that empower regular people to explore space on their own terms.</p>

                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>

            <div className="right-section animation">
                
            <Lottie   animationData={devAnimation} />



                </div>

        </section>
    );
}

export default Hero;