import React from "react";

const PlayTrailer = ({ key, movieName }) => {
  console.log("Error");
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1"
        }
        title={movieName}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default PlayTrailer;
