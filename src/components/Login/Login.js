import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
  return (
    <section className="auth">
      <Logo/>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form">
        <fieldset className="auth__fieldset">
          <label className="auth__form-label" htmlFor="email">
            E-mail
            <input name="email" className="auth__form-input" type="email" required placeholder="E-mail"/>
          </label>
          <span className="auth__form-error"></span>
          <label className="auth__form-label" htmlFor="password">
            Пароль
            <input name="password" className="auth__form-input" type="password" required placeholder="Пароль"/>
          </label>
          <span className="auth__form-error"></span>
        </fieldset>
        <div className="auth__form-buttons-container">
          <button className="auth__submit-button">Войти</button>
          <p className="auth__signin-link-caption">Ещё не зарегистрированы?
            <Link className="auth__signin-link" to="/signup">Регистрация</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
