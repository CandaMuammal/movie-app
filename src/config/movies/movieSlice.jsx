import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIkey } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=movie`)
    return response.data
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=series`)
    return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('shows/etchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`)
    return response.data
})


const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }, 
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('feched successfully')
            return {...state, movies:payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('feched successfully')
            return {...state, shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log('feched successfully')
            return {...state, selectMovieOrShow:payload}
        },
    }
})

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer