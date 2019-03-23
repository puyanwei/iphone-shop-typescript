import React, { useState } from "react";

import data from "./data/phones.json";
import RatingStars from "./components/RatingStars/RatingStars";
import ColourPicker from "./components/ColourPicker/ColourPicker";
import CapacityPicker from "./components/CapacityPicker/CapacityPicker";
import "./App.css";

const App = () => {
    const [phones] = useState(data[0].deviceSummary);
    const [currentPhone, setCurrentPhone] = useState(data[0].deviceSummary[2]);

    const handlePrice = capacity => {
        const { colourName } = currentPhone;
        updateCurrentPhoneState(capacity, colourName);
    };

    const handleColour = colour => {
        const { memory } = currentPhone;
        updateCurrentPhoneState(memory, colour);
    };

    // Applies the correct phone object to the state based on the colour and capacity combination
    const updateCurrentPhoneState = (capacity, colour) => {
        const combinations = [
            "64GB Gold",
            "64GB Silver",
            "64GB Space Grey",
            "256GB Gold",
            "256GB Silver",
            "256GB Space Grey"
        ];
        let index = combinations.indexOf(`${capacity} ${colour}`);
        setCurrentPhone(phones[index]);
    };

    let imageURL = currentPhone.merchandisingMedia[0].value;
    let imageAlt = currentPhone.merchandisingMedia[0].id;

    return !phones.length ? (
        <div className="loading-screen">Loading...</div>
    ) : (
        <div className="App">
            <aside>
                <img src={require(`${imageURL}`)} alt={imageAlt} />
            </aside>
            <main>
                <h1 className="product-name">{currentPhone.displayName}</h1>
                <RatingStars />
                <p className="product-description">
                    {currentPhone.displayDescription}
                </p>
                <div className="bottom-container">
                    <ColourPicker handleColour={handleColour} />
                    <CapacityPicker handlePrice={handlePrice} />
                    <p className="upfront-price">
                        from
                        <span className="price-number">
                            £
                            {
                                currentPhone.priceInfo.hardwarePrice.oneOffPrice
                                    .gross
                            }
                        </span>
                        upfront cost
                    </p>
                    <p className="monthly-price">
                        when you pay
                        <span className="price-number">
                            £
                            {
                                currentPhone.priceInfo.bundlePrice.monthlyPrice
                                    .gross
                            }
                        </span>
                        a month
                    </p>
                </div>
            </main>
        </div>
    );
};

export default App;
