import {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';
import PropTypes from "prop-types";

const VideoFeed = ({cameraName}) => {
    const videoRef = useRef(null);
    const socketRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        socketRef.current = io(import.meta.env.VITE_API_URL, {transports: ['websocket']});

        socketRef.current.on('video_feed', data => {
            if (data.camera === cameraName && videoRef.current) {
                videoRef.current.src = `data:image/jpeg;base64,${data.frame}`;
            }
        });

        socketRef.current.on('streamViewerCheck', (data) => {
            if (data.camera === cameraName) {
                socketRef.current.emit('streamViewerConfirm', {camera: cameraName});
            }
        });

        fetch(`${import.meta.env.VITE_API_URL}/stream/${cameraName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message);
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
        return <div style={{color: 'red'}}><q>{cameraName}</q> video feed error: {error}</div>;
    }

    return (
        <img ref={videoRef} className='videoFeed' alt={`Camera ${cameraName} Feed`}
             style={{width: '100%', height: '100%'}}/>
    );
};

VideoFeed.propTypes = {
    cameraName: PropTypes.string.isRequired,
};

export default VideoFeed;