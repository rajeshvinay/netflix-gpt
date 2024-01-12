import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/apiTokens"
import {  addPolularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const usePopularMovies = () =>{
    const dispatch = useDispatch()
  const getPopularMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const resp = await data.json()
    dispatch(addPolularMovies(resp.results))
  }

  useEffect(()=>{
    getPopularMovies()
  },[])
}

export default usePopularMovies;