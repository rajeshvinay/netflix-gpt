import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/apiTokens"
import { useEffect } from "react"

const useMovieTrailer = (movieId)=>{
    const dispath = useDispatch()
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const videos = await data.json()
        const filterData = videos.results.filter(video=>video?.type=="Trailer");
        const trailer = filterData?.length>0?filterData[0]:videos.results[0]
        dispath(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        if(movieId && !trailerVideo){
            getMovieVideos()
        }
    },[movieId])
}

export default useMovieTrailer