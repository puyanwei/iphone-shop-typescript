import React, { useState, useEffect } from "react";

import data from "./data/phones.json";
import RatingStars from "./components/RatingStars/RatingStars";
import ColourPicker from "./components/ColourPicker/ColourPicker";
import CapacityPicker from "./components/CapacityPicker/CapacityPicker";
import "./App.css";

const App = () => {
    const [phones, setPhones] = useState([]);
    const [currentPhone, setCurrentPhone] = useState(null);
    // const { displayName, displayDescription } = currentPhone;

    useEffect(() => {
        const iphonesData = data[0].deviceSummary;
        setPhones(iphonesData);
        setCurrentPhone(iphonesData[2]);
    });

    const handlePrice = capacity => {
        updateCurrentPhoneState(capacity, currentPhone.colour);
    };

    const handleColour = colour => {
        updateCurrentPhoneState(currentPhone.capacity, colour);
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

    // upfrontPrice: device.priceInfo.hardwarePrice.oneOffPrice.gross,
    //     monthlyPrice: device.priceInfo.bundlePrice.monthlyPrice.gross

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
                {console.log(currentPhone)}
                <h1 className="product-name">{currentPhone.displayName}</h1>
                <RatingStars />
                <p className="product-description">
                    {currentPhone.displayDescription}
                </p>
                <div className="bottom-container">
                    <ColourPicker handleColour={handleColour} />
                    <CapacityPicker handlePrice={handlePrice} />
                    <p className="upfront-price">
                        from{" "}
                        <span className="price-number">
                            £{currentPhone.upfrontPrice}
                        </span>{" "}
                        upfront cost
                    </p>
                    <p className="monthly-price">
                        when you pay{" "}
                        <span className="price-number">
                            £{currentPhone.monthlyPrice}
                        </span>{" "}
                        a month
                    </p>
                </div>
            </main>
        </div>
    );
};

export default App;
