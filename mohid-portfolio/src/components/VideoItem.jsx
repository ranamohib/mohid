import React from "react";
import Video from "./Video";

export default function VideoItem({video, setVideo}) {
  let url = "bg-[url('" + video.caption+ "')]"
  return (
    <div onClick={(e)=> setVideo(<Video video={video} setVideo={setVideo}/>)} className={"cursor-pointer bg-cover transition-all duration-700 bg-center aspect-[5/2] bg-blend-overlay hover:bg-black/60 "+url}>
      <div className="w-full h-full group flex justify-center items-center">
      <div className="text-center transition-all duration-300 flex flex-col items-center opacity-0 group-hover:opacity-100">
          <span className="translate-y-6 ease-out transition-all duration-300 delay-100 group-hover:translate-y-0 uppercase border-b">{video.industry}</span>
          <span className="translate-y-14 transition-all ease-out duration-500 delay-100 group-hover:translate-y-0 uppercase font-extrabold text-4xl mt-2">{video.title}</span>
          <span className="translate-y-16 transition-all ease-out duration-500 delay-150 group-hover:translate-y-0 capitalize font-serif italic text-4xl">{video.summary}</span>
      </div>
      </div>
  </div>
  )
}
