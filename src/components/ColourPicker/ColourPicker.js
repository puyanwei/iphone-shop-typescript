import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./ColourPicker.css";

const ColourPicker = ({ handleColour }) => {
    const [colour, setColour] = useState("Space Grey");

    useEffect(() => {
        handleColour(colour);
    }, [colour]);

    return (
        <div className="colour-picker">
            <p>
                {`Colour: `}
                <span className="picker-choice">{colour}</span>
            </p>
            <button onClick={() => setColour("Gold")} />
            <button onClick={() => setColour("Silver")} />
            <button onClick={() => setColour("Space Grey")} />
        </div>
    );
};

ColourPicker.propTypes = {
    handleColour: PropTypes.func
};

export default ColourPicker;
