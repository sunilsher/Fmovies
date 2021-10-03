import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "series";
export const getSeriesUrl = createAsyncThunk(
  `${sliceName}/getSeriesUrl`,
  async (payload, thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US&page=1"
    );
    return response.data.results;
  }
);

export const getSeriesDetailsUrl = createAsyncThunk(
  `${sliceName}/getSeriesDetailsUrl`,
  async (payload, thunkAPI) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${payload}?api_key=68ba12927b8477ed02ce38b248c90973&language=en-US`);
    return response.data;
  }
);
export const seriesSlice = createSlice({
  name: sliceName,
  initialState: {
    series: [],
    seriesDetails: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSeriesUrl.fulfilled, (state, action) => {
      state.series = action.payload;
    });
    builder.addCase(getSeriesDetailsUrl.fulfilled,(state,action)=>{
      state.seriesDetails = action.payload;

    });
  },
});

export default seriesSlice.reducer;
