import React, { useState, useEffect } from "react";
import axios from "../../axios";
import request from "../../request";
import "./Jumbotron.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";
const Jumbotron = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const movies = await axios.get(request.fetchNetflixOriginals);
      const random = Math.floor(Math.random() * movies.data.results.length - 1);
      const selected = movies.data.results[random];
      setMovie(selected);
      return { movies };
    }
    fetchMovie();
  }, [setMovie]);

  return (
      <div>
    <div
      className='Jumbotron'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundSize: "cover",
      }}
    >
      <div className='jumbotron__contain'>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p>{movie?.overview}</p>
        <div className='jumbotron__button'>
          <button className='button'>
            <PlayArrowIcon className='icon' />
            Play
          </button>
          <button className='button'>
            <InfoIcon className='icon' />
            My List
          </button>
        </div>
      </div>
      </div>
      <div className="fade__bottom"></div>
      </div>
      
  );
};

export default Jumbotron;
