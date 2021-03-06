import React, { useState, useEffect } from 'react';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './MoviesCard.css';

function MoviesCard({
  movie,
  onSave,
  onRemove,
  savedMoviesIds,
  savedPage,
}) {
  const {
    country,
    director,
    year,
    description,
    image,
    thumbnail,
    nameRU,
    nameEN,
    duration,
    trailer,
    movieId,
  } = movie;

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration - (durationHours * 60);
  const durationString = durationHours ? `${durationHours}ч ${durationMinutes}м` : `${durationMinutes}мин`;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedMoviesIds && savedMoviesIds.includes(movieId)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMoviesIds, movieId]);

  const handleClick = () => {
    window.open(trailer);
  };

  const handleSave = () => {
    onSave({
      country: country || 'Не указано',
      director: director || 'Не указано',
      duration: duration || 0,
      year: year || 'Не указано',
      description: description || 'Не указано',
      image: image || defaultMovieImage,
      trailer: (trailer && trailer.startsWith('http')) ? trailer : 'https://youtube.com',
      thumbnail: thumbnail || defaultMovieImage,
      nameRU: nameRU || 'Не указано',
      nameEN: nameEN || 'Не указано',
      movieId,
    });
  };

  const handleRemove = () => {
    onRemove(movieId);
  };

  return (
      <li className="movie">
        <div>
          <button className={`movie__button ${!isSaved && 'movie__unsave-button'} ${isSaved && 'movie__saved-button'} ${savedPage && 'movie__delete-button'}`} onClick={!isSaved && !savedPage ? handleSave : handleRemove}/>
        </div>
        <img src={image || defaultMovieImage} className="movie__image" alt={nameRU} onClick={handleClick}/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">{nameRU}</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">{durationString}</span>
          </div>
        </div>
      </li>
  );
}

export default MoviesCard;
