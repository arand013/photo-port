import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";


function Gallery (props) {
    const currencyCategory = {
        name: "commercial",
        description: 
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currencyCategory.name)}</h1>
            <p>{currencyCategory.name}</p>
            <div>
                <img src={photo}
                />
            </div>
        </section>
    )
}
export default Gallery;