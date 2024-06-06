import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import PropTypes from "prop-types";


const VideoFeed = ({ cameraName }) => {
    const videoRef = useRef(null);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io(import.meta.env.VITE_API_URL);

        socketRef.current.on('video_feed', data => {
            if (data.camera === cameraName && videoRef.current) {
                videoRef.current.src = `data:image/jpeg;base64,${data.frame}`;
            }
        });

        fetch(`${import.meta.env.VITE_API_URL}/stream/${cameraName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            });
    }, [cameraName]);

    return (
        <div>
            <h1>Camera {<q>{cameraName}</q>}</h1>
            <img ref={videoRef} alt={`Camera ${cameraName} Feed`} />
        </div>
    );
};

VideoFeed.propTypes = {
    cameraName: PropTypes.string.isRequired,
};

export default VideoFeed;