import React from "react";
import SpecialsData from "../SpecialsData/SpecialsData";
import './Specials.css'
import special1 from '../images/special1.jpg';
import special2 from '../images/special2.jpg';
import special3 from '../images/special3.jpeg';


function Specials() {
    return (
        <div className="specials">
            <h1>Specials</h1>
            <p>Here are all types of Rabbits that are on Specials. Enjoy our 5% discount!</p>
            <div className="specialscard">
                <SpecialsData
                    images={special1}
                    heading="New Zealand Grey "
                    head="$50.00"
                    text="$40.00"
                />

                <SpecialsData
                    images={special2}
                    heading="New Zealand Crossbreed"
                    head="$45.00"
                    text="$35.00"
                />

                <SpecialsData
                    images={special3}
                    heading="Flemish Giant"
                    head="$50.00"
                    text="$45.00"
                />

            </div>
        </div>
    );
}

export default Specials;