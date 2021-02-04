import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/an_webp/JUfWpOubK2o/mqdefault_6s.webp?du=3000&sqp=CPj78v4F&rs=AOn4CLBoj7jfg_b8NfIbFSRhFtdWvkayWA"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "No Title",
  desc: "No Desc",
};

export default YouTubeComp;
