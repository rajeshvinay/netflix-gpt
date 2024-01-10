import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/apiTokens'

const VideoBackground = ({movieId}) => {
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const videos = await data.json()
        const filterData = videos.results.filter(video=>video?.type=="Trailer");
        const trailer = filterData?.length>0?filterData[0]:videos.results[0]
        console.log(trailer)
    }
    useEffect(()=>{
        if(movieId){
            getMovieVideos()
        }
    },[movieId])
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground