import React from "react";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="video_container">
      <div className="box">
        <span>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=wLd3dfix2B8"
            className="react-video-player"
            playing
            muted
            width="1000px"
            height="562.50px"
          />
        </span>
      </div>
    </div>
  );
};

export default Video;
