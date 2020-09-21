import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import { Info, PlayCircleFilled, Close } from "@material-ui/icons";
const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [watchVideo, setWatchVideo] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    async function movieData() {
      const movies = await axios.get(fetchURL);
      setMovies(movies.data.results);
      return { movies };
    }
    movieData();
  }, [fetchURL]);

  const watchMovieHandler = () => {
    setWatchVideo(true);
  };
  const movieInfoHandler = (movie) => {
    if (movieDetail) {
      setMovieDetail(null);
    }
    setMovieDetail(movie);
  };
  const closeHandler = () => {
    setWatchVideo(false);
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <div className={`row__post `} key={movie.id}>
              <img
                className={`row__poster ${isLarge && "row__poster-large"}`}
                src={`${BASE_URL}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div className='poster__button-group'>
                <button title='watch' className='poster__button'>
                  <PlayCircleFilled
                    fontSize='large'
                    className='poster__icon'
                    onClick={watchMovieHandler}
                  />
                </button>
                <button title='Details' className='poster__button'>
                  <Info
                    className='poster__icon'
                    fontSize='large'
                    onClick={() => movieInfoHandler(movie)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {watchVideo ? (
        <div>
          <button className='close'>
            <Close fontSize='large' onClick={closeHandler} />
          </button>
          <h1>
            This is video player section . This project does not have movie
            server so no player
          </h1>
        </div>
      ) : null}
      {movieDetail && (
        <div>
          <button className='close'>
            <Close fontSize='large' onClick={() => setMovieDetail(null)} />
          </button>
          <div className='movie__detail'>
            <div className='movie__image'>
              <img
                src={`${BASE_URL}${movieDetail.poster_path}`}
                alt={movieDetail.id}
              />
            </div>
            <div className='movie__detail-box'>
              <h3>{movieDetail.name || movieDetail.original_title}</h3>
              <h5>
                Release date:{" "}
                {movieDetail.first_air_date || movieDetail.release_date}
              </h5>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
