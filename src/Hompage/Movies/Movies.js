import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card,Row} from "react-bootstrap";
import { getMoviesUrl } from "../../Store/Slices/movieSlices";
import { Link } from "react-router-dom";

const Movies = () => {
    const {movies} = useSelector((state ) => state.movie);
    const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(getMoviesUrl())

        },[dispatch]);

    console.log("movies:",movies);

    // const movieList =[...movies,...topRatedMovies]
    return (
    <div style={{backgroundColor:"black",textAlign:"center"}} >
            <h1 style={{color:"white",padding:"20px"}}> Popular Movies </h1>
          <Row>
            {
                movies.map((movie)=>{
                    return <Card key={movie.id} style={{ width:'18rem',margin:"10px 30px", backgroundColor:"black"}} ><Link style={{textDecoration:"none"}} to={`/moviedetails/${movie.id}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style ={{paddingLeft:"0px",paddingRight:"0px", height:'28rem' }}/ >
                    <Card.Body>
                      <Card.Title style={{ color:"white"}}>{movie.original_title}</Card.Title>  
                    </Card.Body>
                    </Link>
                  </Card>
                })
            }
        </Row>
       
    </div>
    )
}

export default Movies;