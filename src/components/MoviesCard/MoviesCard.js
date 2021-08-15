import React from 'react';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <li className="movie">
        <div>
          <button className="movie__save-button">Сохранить</button>
        </div>
        <div>
          <button className="movie__saved-button"/>
        </div>
        <div>
          <button className="movie__delete-button"/>
        </div>
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>

          </div>
        </div>
      </li>
      <li className="movie">
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </li>
      <li className="movie">
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </li>
      <li className="movie">
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </li>
      <li className="movie">
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </li>
      <li className="movie">
        <img src={defaultMovieImage} className="movie__image" alt="Изображение по умолчанию"/>
        <div className="movie__container">
          <div className="movie__text-container">
            <p className="movie__title">33 слова о дизайне</p>
          </div>
          <div className="movie__button-container">
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
