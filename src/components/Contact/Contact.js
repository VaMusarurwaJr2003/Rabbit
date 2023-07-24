import React from "react";
import Hero from "../Hero";
import contact from '../images/contact.jpg';
import Footer from "../Footer/Footer";

function Contact() {
    return (
        <>
            <Hero
                cName="hero-contact"
                heroImg={contact}
                title="Contact"
                btnClass="hide"
            />
            <Footer />
        </>

    );
}

export default Contact;