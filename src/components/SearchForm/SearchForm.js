import React from 'react';

import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-container">
          <div className="search-form__input-container">
            <span className="search-form__lens-img"/>
            <input className="search-form__input" placeholder="Фильм" required/>
            <div><button className="search-form__button"/></div>
            <div className="search-form__switch-container">
              <label className="switch">
                <input className="switch__input" type="checkbox"/>
                <span className="switch__slider"/>
              </label>
              <p className="search-form__checkbox-text">Короткометражки</p>
            </div>
          </div>
          <div className="search-form__switch-container_outside-of-input">
            <label className="switch">
              <input className="switch__input" type="checkbox"/>
              <span className="switch__slider"/>
            </label>
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </div>
        <span className="search-form__error"/>
      </div>
    </form>
  );
}

export default SearchForm;
