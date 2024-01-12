import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  const popularMovies = useSelector(store=>store.movies)
  const topRatedMovies = useSelector(store=>store.movies)
  const upComingMovies = useSelector(store=>store.movies)
  return (
    <div className=' bg-black'>
      <div className='-mt-[208px] pl-12 z-10 relative'>
        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies = {topRatedMovies.topRatedMovies} />
        <MovieList title={"Popular"} movies = {popularMovies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies = {upComingMovies.upComingMovies} />
        <MovieList title={"Horror"} movies = {movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer