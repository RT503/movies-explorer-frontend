import fetchFullApi from './fetchFullApi';

export const BASE_URL = 'https://api.rt503diploma.nomoredomains.club';

export const headers = {
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'signup',
  method: 'POST',
  body: { name, email, password },
});

export const login = ({ email, password }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'signin',
  method: 'POST',
  body: { email, password },
});

export const logout = () => fetchFullApi({
  BASE_URL,
  method: 'DELETE',
  headers,
  path: 'signout',
});

export const updateProfile = ({ name, email }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'users/me',
  method: 'PATCH',
  body: { name, email },
});

export const getUserData = () => fetchFullApi({
  BASE_URL,
  headers,
  path: 'users/me',
});

export const getMovies = () => fetchFullApi({
  BASE_URL,
  path: 'movies',
  headers,
});

export const saveMovie = ({
  country, director, duration, year, description,
  image, trailer, thumbnail, nameRU, nameEN, movieId,
}) => fetchFullApi({
  BASE_URL,
  path: 'movies',
  method: 'POST',
  headers,
  body: {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  },
});

export const removeMovie = (dbId) => fetchFullApi({
  BASE_URL,
  path: `movies/${dbId}`,
  headers,
  method: 'DELETE',
});
