import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMoviesUrl } from "../../Store/Slices/movieSlices";

const Carousels = () => {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesUrl());
  }, [dispatch]);

  const sliderMovies = [];
  if (movies.length > 6) {
    for (var i = 0; i < 6; i++) {
      sliderMovies[i] = movies[i];
    }
  }

  return (
    <div>
      <Carousel interval={2000}>
        {sliderMovies.map((movie) => {
          return (
            <Carousel.Item
              key={movie.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "500px",
              }}
            >
              
              <Carousel.Caption style={{ color: "white", textAlign: "left" }}>
                <h3>{movie.original_title}</h3>
                <p>{movie.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Carousels;
