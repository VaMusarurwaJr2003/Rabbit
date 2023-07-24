import React from "react";
import Hero from "../Hero";
import Breed from "../Breed/Breed"
import Specials from "../Specials/Specials"
import home from '../images/home.jpg';
import Footer from "../Footer/Footer";

function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={home}
                title="Welcome to the Home of Rabbits."
                text="Sign Up to find out more About our Rabbittry Record Keeping App!"
                buttonText="Sign Up"
                url="/register"
                btnClass="show"
            />
            <Breed />
            <Specials />
            <Footer />

        </>

    );
}

export default Home;