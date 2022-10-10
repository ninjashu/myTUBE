import React from "react";
import Videolist from "./Videolist";
import "./Main.css";

const VideoDetails = ({ arr }) => {
// console.log(arr);
  return (
    <>
      {arr.map((items) => {
          return <Videolist items={items} />;
      })}
    </>
  );
};

export default VideoDetails;
