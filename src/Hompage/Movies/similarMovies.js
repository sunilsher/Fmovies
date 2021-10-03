import { useSelector, useDispatch} from "react-redux"
import { getSimilarMovieUrl } from "../../Store/Slices/movieSlices"
import { useEffect } from "react"
import { Card,Row } from "react-bootstrap"
import { useParams } from "react-router"
import React from "react"


const SimilarMovies = ()=>{
    const {similarMovies} = useSelector((state)=>state.movie)
    const {id}= useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSimilarMovieUrl(id))
        }, [dispatch,id])
        return (
            <div style={{backgroundColor:"black",textAlign:"center"}} >
                    <h1 style={{color:"white",padding:"20px"}}> Similar Movies </h1>
                  <Row>
                    {
                        similarMovies.map((similarmovie)=>{
                            return <Card key={similarmovie.id} style={{ width:'18rem',margin:"10px 30px", backgroundColor:"black"}} >
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${similarmovie.poster_path}`} style ={{paddingLeft:"0px",paddingRight:"0px", height:'28rem' }}/ >
                            <Card.Body>
                              <Card.Title style={{ color:"white"}}>{similarmovie.original_title}</Card.Title>  
                            </Card.Body>
           
                          </Card>
                        })
                    }
                </Row>
            </div>
            )

    
}
export default SimilarMovies;