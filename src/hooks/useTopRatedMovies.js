import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/apiTokens";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const resp = await data.json()
        dispatch(addTopRatedMovies(resp.results))
      }
    
      useEffect(()=>{
       !topRatedMovies && getTopRatedMovies()
      },[])
}

export default useTopRatedMovies