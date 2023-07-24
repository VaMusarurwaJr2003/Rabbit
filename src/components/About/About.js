import React from "react";
import Hero from "../Hero";
import about from '../images/about.jpg';
import Footer from "../Footer/Footer";

function About() {
    return (
        <>
            <Hero
                cName="hero-bout"
                heroImg={about}
                title="About"
                btnClass="hide"
            />
            <Footer />
        </>

    );
}

export default About;