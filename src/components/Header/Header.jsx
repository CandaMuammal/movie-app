import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom"
import user from '../../images/user.jpg'
import { fetchAsyncMovies, fetchAsyncShows } from '../../config/movies/movieSlice'
import "./Header.scss"

const Header = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    {term != "" ? dispatch(fetchAsyncMovies(term)) : dispatch(fetchAsyncMovies("Spongebob"))}
    {term != "" ? dispatch(fetchAsyncShows(term)) : dispatch(fetchAsyncShows("Tom and Jerry"))}
    console.log(term)
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value) }/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header