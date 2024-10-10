import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Animation - 1727669511443.json"
import mailAnimation from "../../../src/animation/Animation - 1727671019660.json";
import "./contact.css";

const Contact = () => {
    const [state, handleSubmit] = useForm("xblrnzre");


    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact Us
            </h1>

            <p className="sub-title">contact us for more information and get notified when i publish something new.</p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit} className="">
                    <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>


                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>


                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "submitting...." : "submit"}
                    </button>

                    {state.succeeded && (<p className='flex' style={{ fontSize: "20px", marginTop: "1.7rem" }}>
                        <Lottie loop={false} style={{ height: "70px" }} animationData={doneAnimation} />

                        Your message has been sent successfully</p>)}
                </form>
                <div className=" animation">
                    <Lottie className='contact-animation' style={{ height: "355px", marginLeft: "250px" }} animationData={mailAnimation} />
                </div>
            </div>
        </section>
    );
}

export default Contact;