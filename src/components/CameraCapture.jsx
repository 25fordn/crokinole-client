import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const CameraCapture = ({cameraName}) => {
    const [imgSrc, setImgSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/capture/${cameraName}`, {mode: 'cors'})
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(base64Image => {
                setImgSrc(`data:image/jpeg;base64,${base64Image}`);
                setIsLoading(false);
            })
            .catch(e => {
                setError(e.message);
                setIsLoading(false);
            });
    }, [cameraName]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{color: 'red'}}><q>{cameraName}</q> capture error: {error}</div>;
    }

    return (
        <img src={imgSrc} className='cameraCapture' alt={`Camera ${cameraName} Capture`}/>
    );
};

CameraCapture.propTypes = {
    cameraName: PropTypes.string.isRequired,
};

export default CameraCapture;