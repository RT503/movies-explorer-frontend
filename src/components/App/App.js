import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route>
          <Login/>
        </Route>
        <Route>
          <Register/>
        </Route>
        <Route>
          <Profile/>
        </Route>
        <Route>
          <Movies/>
        </Route>
        <Route>
          <SavedMovies/>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
