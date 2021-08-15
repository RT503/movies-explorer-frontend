import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header mod="header_white-theme">
        <Navigation themeWhite={true}/>
      </Header>
      <SearchForm/>
      <section className="movies">
        <div className="movies__container">
          <ul className="movies__list">
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
          </ul>
          <button className="movies__more-button">Еще</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
