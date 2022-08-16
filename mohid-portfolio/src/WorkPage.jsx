import React, { useState } from 'react';
import VideoItem from "./components/VideoItem";

export default function WorkPage() {
  let [vid, setVideo] = useState('');
  let videos = [
    {
      'id':0,
      'industry': 'commercial',
      'title': 'streaker',
      'summary': 'Tobasco',
      'caption': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2YQ4w9UVb9cqELy2SYK4gwEnxoESz0g15g&usqp=CAU',
      'path': 0
    },
    {
      'id': 1,
      'industry': 'commercial',
      'title': 'beobank',
      'summary': 'when',
      'caption': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2YQ4w9UVb9cqELy2SYK4gwEnxoESz0g15g&usqp=CAU',
      'path': 0
    }
  ]

  return (
    <div className="transition-all duration-500 ease-out">
      {vid}
      <div  className="mt-4 grid grid-cols-1 md:grid-cols-2 transition-all duration-500 ease-out">
        {videos.map(video => <VideoItem setVideo={setVideo} key={video.id} video={video}/>)}
      </div>
    </div>
  )
}
