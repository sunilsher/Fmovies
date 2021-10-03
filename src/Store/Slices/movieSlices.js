import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const sliceName ="movie";

export const getMoviesUrl = createAsyncThunk(
  `${sliceName}/getMoviesUrl`,
  async (payload, thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US"
    );
    
    return response.data.results
  }
);

export const getMovieDetailsUrl = createAsyncThunk(
    `${sliceName}/getMovieDetailsUrl`,
    async(payload,thunkAPI)=>{
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${payload}?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US`

        );
        
        return response.data
    
    }
)

export const getSimilarMovieUrl = createAsyncThunk(
  `${sliceName}/getSimilarMovieSUrl`,
  async(payload,thunkAPI)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}/similar?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US&page=1`

    );
   return response.data.results
   
  }
)

export const movieSlice = createSlice({
  name: sliceName,
  initialState: {
    movies: [],
    movieDetails:[],
    similarMovies:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesUrl.fulfilled, (state, action) => {
        state.movies=action.payload
    });
    builder.addCase(getMovieDetailsUrl.fulfilled,(state, action)=>{
        state.movieDetails = action.payload
    });
    builder.addCase(getSimilarMovieUrl.fulfilled,(state,action)=>{
      state.similarMovies =action.payload 
    })
  },
});

export default movieSlice.reducer