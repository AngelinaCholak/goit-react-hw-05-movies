import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchDetails } from 'components/config';
import css from 'components/index.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetailsFilm = async () => {
      try {
        const details = await fetchDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        console.log('Finally');
      }
    };

    getDetailsFilm();
  }, [movieId]);

  return (
    <div className={css.containerMovie}>
      {movieDetails && (
        <div className={css.movieContainer}>
          <h1 className={css.title}>{movieDetails.title}</h1>
          <div className={css.detailsContainer}>
            <img
              className={css.imgDetails}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className={css.info}>
              <h3 className={css.heading}>
                User score: {Math.round(movieDetails.vote_average * 10)}%
              </h3>
              <h2 className={css.subtitle}>Overview</h2>
              <p className={css.text}>{movieDetails.overview}</p>
              <h2 className={css.subtitle}>Genres</h2>
              <ul className={css.list}>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id} className={css.listItem}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className={css.heading}>Additional information</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <NavLink to="cast" className={css.link}>
                Cast
              </NavLink>
            </li>
            <li className={css.listItem}>
              <NavLink to="reviews" className={css.link}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;