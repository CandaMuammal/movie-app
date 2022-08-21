import React, {useEffect} from 'react'
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../config/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()

  const movieText = "Spongebob"
  const showText = "Tom and Jerry"

  useEffect(() => {
   dispatch(fetchAsyncMovies(movieText))
   dispatch(fetchAsyncShows(showText))
  }, [dispatch])
  
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
    
  )
}

export default Home