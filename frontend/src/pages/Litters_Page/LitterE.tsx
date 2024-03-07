import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Litter from "../Litter";
import {LitterCListingData} from "../../data/LitterListings/LitterCListingData";
import {LitterEListingData} from "../../data/LitterListings/LitterEListingData";

const LitterE = () => {
    return (
        <Litter kittensData={LitterEListingData}/>
    );
};

export default LitterE;
