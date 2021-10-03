import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card,Row} from "react-bootstrap";
import { getSeriesUrl } from "../../Store/Slices/seriesSlice";
import { Link } from "react-router-dom";

const Series = () => {
    const {series} = useSelector((state ) => state.series);
    const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(getSeriesUrl())

        },[dispatch]);

    console.log("series:",series);
    return (
        <div style={{backgroundColor:"black",textAlign:"center"}} >
            <h1 style={{color:"white",padding:"20px"}}> Popular Series </h1>
          <Row>
            {
               series.map((series)=>{
                    return <Card key={series.id} style={{ width:'18rem',margin:"10px 30px", backgroundColor:"black"}} ><Link style={{textDecoration:"none"}} to={`/seriesdetails/${series.id}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} style ={{paddingLeft:"0px",paddingRight:"0px", height:'28rem' }}/ >
                    <Card.Body>
                      <Card.Title style={{ color:"white"}}>{series.name}</Card.Title>  
                    </Card.Body>
                    </Link>
                  </Card>
                })
            }
        </Row>
            
        </div>
    )
}

export default Series;