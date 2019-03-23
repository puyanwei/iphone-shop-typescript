import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./CapacityPicker.css";

const CapacityPicker = ({ handlePrice }) => {
    const [capacity, setCapacity] = useState("64GB");

    useEffect(() => {
        handlePrice(capacity);
    }, [capacity]);

    return (
        <div className="capacity-picker">
            <p>
                Capacity: <span className="picker-choice">{capacity}</span>
            </p>
            <button onClick={() => setCapacity("64GB")}>
                <span className="capacity-number">64</span>
            </button>
            <button onClick={() => setCapacity("256GB")}>
                <span className="capacity-number">256</span>
            </button>
        </div>
    );
};

CapacityPicker.propTypes = {
    handlePrice: PropTypes.func
};

export default CapacityPicker;
