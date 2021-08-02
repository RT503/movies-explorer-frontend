import React from 'react';
import Section from '../Section/Section';
import photo from '../../images/photo.jpg';
import './AboutMe.css';

import { facebook, github } from '../../utils/constants';

function AboutMe({ children }) {
  return (
    <Section sectionTitle="Студент" mod="about-me" id="about-me">
      <div className="about-me__columns">
        <div className="about-me__first-column">
          <h3 className="about-me__name">Роман</h3>
          <p className="about-me__summary">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">
            Прошел курс по веб-разработке в Яндекс.Практикум.
          </p>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a target="_blank"
                 className="about-me__link"
                 href={facebook} rel="noreferrer">Facebook</a>
            </li>
            <li className="about-me__list-item">
              <a
                target="_blank"
                className="about-me__link"
                href={github} rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <div className="about-me__last-column">
          <img className="about-me__image" src={photo} alt="Фото студента"/>
        </div>
      </div>
      { children }
    </Section>
  );
}

export default AboutMe;
