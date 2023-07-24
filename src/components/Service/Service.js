import React from "react";
import Hero from "../Hero";
import services from '../images/services.jpg';
import Footer from "../Footer/Footer";

function Service() {
    return (
        <>
            <Hero
                cName="hero-service"
                heroImg={services}
                title="Service"
                btnClass="hide"
            />
            <Footer/>
        </>

    );
}

export default Service;