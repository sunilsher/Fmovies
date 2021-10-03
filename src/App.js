import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Country from "./Hompage/Country/Country";
import Gener from "./Hompage/Gener/Gener";
import Home from "./Hompage/Home/Home";
import Movies from "./Hompage/Movies/Movies";
import Series from "./Hompage/Series/Series";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Imdb from "./Hompage/IMDb/IMDb";
import MovieDetails from "./Hompage/Movies/movieDetails";
import SeriesDetails from "./Hompage/Series/seriesDetails";



const App = () => {
  return (
    <Router>
       <Navbar/>
        <Switch>
          <Route path="/movies" >
            <Movies />
          </Route>
          <Route path="/moviedetails/:id" >
            <MovieDetails />
          </Route>
          <Route path="/seriesdetails/:id" >
            <SeriesDetails/>
          </Route>
          <Route path="/gener" >
            <Gener />
          </Route>
          <Route path="/series" >
            <Series />
          </Route>
          <Route path="/country" >
            <Country />
          </Route>
          <Route path="/Imdb">
            <Imdb/>
          </Route>
          <Route path="/" >
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>

    </Router>
  );
};

export default App;
