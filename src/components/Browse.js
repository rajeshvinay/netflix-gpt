import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  const showGPTSearch = useSelector(state=>state.gpt.toggleGPT)
  return (
    <>
    <Header/>
    {showGPTSearch?<GptSearch/>:
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
    }
    </>
  )
}

export default Browse