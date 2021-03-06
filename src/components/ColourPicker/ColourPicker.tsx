import React, { useState, useEffect } from "react";

import "./ColourPicker.css";

const ColourPicker = ({ handleColour }: { handleColour: (string: String) => void }) => {
    const [colour, setColour] = useState("Space Grey");

    useEffect(() => {
        handleColour(colour);
    }, [handleColour, colour]);

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

export default ColourPicker;
