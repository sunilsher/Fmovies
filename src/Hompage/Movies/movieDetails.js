
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsUrl } from "../../Store/Slices/movieSlices";
import { useEffect } from "react";
import { useParams } from "react-router";
import SimilarMovies from "./similarMovies";
const MovieDetails = () => {
  const { movieDetails } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieDetailsUrl(id));
  }, [dispatch, id]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
          width: "100%",
          backgroundSize: "cover",
          marginTop: "0px",
          display:"flex"
        }}
      >
        <div>
          <img
            style={{ height: "500px" }}
            alt=""
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          ></img>
        </div>

        <div style={{float:"right", marginTop:'350px'}}>
          <h1 style={{ color: "white" }}>{movieDetails.original_title}</h1>
          <p style={{ color: "white" }}>{movieDetails.overview}</p>
        </div>
      </div>
      <SimilarMovies/>
    </div>
  );
};
export default MovieDetails;
