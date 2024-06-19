import RangeSelector from './RangeSelector';
import '../styles/HSVSelector.css';

const HSVSelector = () => {
    return (
        <div className="hsv-selector">
            <RangeSelector label="Hue" minValue={0} maxValue={360}/>
            <RangeSelector label="Saturation" minValue={0} maxValue={100}/>
            <RangeSelector label="Value" minValue={0} maxValue={100}/>
        </div>
    );
};

export default HSVSelector;
