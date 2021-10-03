import { configureStore } from "@reduxjs/toolkit";
import movieSlices from "./Slices/movieSlices";
import seriesSlice from "./Slices/seriesSlice";



export default configureStore({
    reducer:{
        movie:movieSlices,
        series:seriesSlice
       
    }
})