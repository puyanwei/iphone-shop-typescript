import React, { useState, useEffect } from "react";

import "./CapacityPicker.css";

const CapacityPicker = ({ handlePrice }: { handlePrice: (string: String) => void }) => {
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

export default CapacityPicker;
