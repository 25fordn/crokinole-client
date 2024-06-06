import '../styles/LiveFeed.css';

import VideoFeed from "../components/VideoFeed.jsx";

const LiveFeed = () => {
    return (
        <div className="video-feed-container">
            <VideoFeed cameraName="overhead"/>
            <VideoFeed cameraName="onboard"/>
        </div>
    );
}

export default LiveFeed;