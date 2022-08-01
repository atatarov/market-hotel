import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { authAction } from '../../store/api-action';
import { useAppDispatch } from '../../store/hooks';

enum ErrorMessage {
  Email = 'Incorrect email, e.g. name@mail.ru',
  Password = 'Password must have at least a number and a letter and mustn\'t contain spaces',
}

export function AuthPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleEmailChange = () => {
    if (emailRef.current !== null) {
      const emailField = emailRef.current;

      const result = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        emailField.value,
      );

      result === false
        ? emailField.setCustomValidity(ErrorMessage.Email)
        : emailField.setCustomValidity('');
    }
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const passwordField = passwordRef.current;

      const containNumber = /\d/g.test(passwordField.value);
      const containString = /[a-z]/gi.test(passwordField.value);
      const containSpace = /[\s]/gi.test(passwordField.value);

      const result = containNumber && containString && !containSpace;

      result === false
        ? passwordField.setCustomValidity(ErrorMessage.Password)
        : passwordField.setCustomValidity('');
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(
        authAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={AppRoute.Main}>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
