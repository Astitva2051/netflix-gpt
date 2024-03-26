import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-s w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-10 text-lg font-bold rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="m-2 bg-white text-black p-2 px-10 text-lg font-bold rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
