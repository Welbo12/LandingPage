import React from "react";
import "./cinq.css";

const VideoCard: React.FC = () => {
  return (
    <div className="video-wrapper">
      <div className="video-card">
        <div className="video-content">
          <div className="logo">
            <span className="play-button">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
