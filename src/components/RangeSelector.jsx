import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import {useState} from "react";
import PropTypes from "prop-types";
import '../styles/RangeSelector.css';

const RangeSelector = ({label, minValue = 0, maxValue = 100}) => {
    const [valueRange, setValueRange] = useState({min: minValue, max: maxValue});

    const handleValueChange = (value) => {
        if (value.min >= minValue && value.max <= maxValue) {
            setValueRange(value);
        }
    };

    return (
        <div className="range-selector">
            <h2>{label}</h2>
            <div className="input-range-container">
                <InputRange
                    maxValue={maxValue}
                    minValue={minValue}
                    value={valueRange}
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <input type="number" value={valueRange.min} onChange={e => {
                    let newValue = Number(e.target.value);
                    if (newValue < minValue) newValue = minValue;
                    if (newValue > valueRange.max) newValue = valueRange.max;
                    setValueRange({...valueRange, min: newValue});
                }}/>
                <input type="number" value={valueRange.max} onChange={e => {
                    let newValue = Number(e.target.value);
                    if (newValue > maxValue) newValue = maxValue;
                    if (newValue < valueRange.min) newValue = valueRange.min;
                    setValueRange({...valueRange, max: newValue});
                }}/>
            </div>
        </div>
    );
};

RangeSelector.propTypes = {
    label: PropTypes.string.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
};

export default RangeSelector;
