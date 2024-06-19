import HSVSelector from "../components/HSVSelector.jsx";
import {useParams} from "react-router-dom";

const CalibrateCamera = () => {
    const {cameraName} = useParams();

    return (
        <>
            <h1>Calibrate Camera {cameraName}</h1>
            <HSVSelector/>
        </>
    );
};

export default CalibrateCamera;