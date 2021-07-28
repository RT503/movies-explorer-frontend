import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">Привет, User</h2>
        <div className="profile__info-container">
          <p className="profile__label">Имя</p>
          <p className="profile__current-info">Тек имя</p>
        </div>
        <div className="profile__info-container">
          <p className="profile__label">E-mail</p>
          <p className="profile__current-info">тек почта</p>
        </div>
        <div className="profile__buttons-container">
          <Link className="profile__link">Редактировать</Link>
          <Link className="profile__link-signout">Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
