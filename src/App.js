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
        updateCurrentPhoneState(capacity, currentPhone.colourName);
    };

    const handleColour = colour => {
        updateCurrentPhoneState(currentPhone.memory, colour);
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

    return !phones.length ? (
        <div className="loading-screen">Loading...</div>
    ) : (
        <div className="App">
            <aside>
                <img
                    src={require(`${phones[2].merchandisingMedia[0].value}`)}
                    alt={phones[2].merchandisingMedia[0].id}
                />
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
