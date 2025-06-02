import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name: "movies", 
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    upcomingMovies:null,
    trendingMovies:null,
    trailerVideo:null,
    movieDetails:null
  },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
        },
        addMovieDetails:(state,action)=>{
          state.movieDetails=action.payload;
        },clearMovieDetails: (state) => {
      state.movieDetails = null;
    },
    }
})
 export const {addNowPlayingMovies,addTrailerVideo,addUpcomingMovies,addTrendingMovies,addPopularMovies,addMovieDetails,clearMovieDetails} = movieSlice.actions
export default movieSlice.reducer