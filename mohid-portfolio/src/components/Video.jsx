import vid1 from '../assets/videos/one.mp4'

export default function Video({video, setVideo}) {
	let videos = [vid1]
  return (
     <div className="text-black bg-black animate__animated animate__slideInUp animate__slow">
			 <div className="w-3/5 mx-auto aspect-video">
				 <video width="750" height="500" autoPlay playsInline >
				 		<source src={videos[video.path]} type="video/mp4"/>
				 </video>
			 </div>
			 <div className="bg-slate-50 p-4 flex justify-between items-center">
					<div className="">
						<div className="uppercase text-gray-500">{video.industry}</div>
				 		<div className="uppercase font-extrabold text-4xl -mt-3">{video.title}<span className="capitalize italic font-normal font-serif"> {video.summary}</span></div>
					</div>
					<div className="">
						<button onClick={()=> setVideo('')}>close</button>
					</div>
			 </div>
		 </div> 
  )
}
