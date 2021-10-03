import { useSelector,useDispatch} from "react-redux"
import { useParams } from "react-router";
import { getSeriesDetailsUrl } from "../../Store/Slices/seriesSlice";
import { useEffect } from "react";



const SeriesDetails =()=>{
    const {seriesDetails} = useSelector((state)=>state.series)
    const dispatch = useDispatch();
    const {id}= useParams();
    useEffect(() => {
        dispatch(getSeriesDetailsUrl(id));
      
    }, [dispatch,id]);


    return (
        <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${seriesDetails.backdrop_path})`,
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
                src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}
              ></img>
            </div>
    
            <div style={{float:"right", marginTop:'350px'}}>
              <h1 style={{ color: "white" }}>{seriesDetails.original_name}</h1>
              <p style={{ color: "white" }}>{seriesDetails.overview}</p>
            </div>
          </div>
        </div>
      );
    };







export default SeriesDetails