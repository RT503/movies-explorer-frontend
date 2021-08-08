import React from 'react';
import NavTab from '../NavTab/NavTab';
import Logo from '../Logo/Logo';

import './Promo.css';

function Promo() {
  return (
    <section className="promo" mod="promo">
      <div className="promo__container">
        <Logo className="promo__logo"/>
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот <br/>проект и его создателя.</p>
        <NavTab/>
      </div>
    </section>
  );
}

export default Promo;
