import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/apiTokens"
import {  addUpComingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const useUpComingMovies = () =>{
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store=>store.movies.upComingMovies)
  const getUpComingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const resp = await data.json()
    dispatch(addUpComingMovies(resp.results))
  }

  useEffect(()=>{
    !upcomingMovies && getUpComingMovies()
  },[])
}

export default useUpComingMovies;