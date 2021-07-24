import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route path="*" />
      </Switch>
    </div>
  );
}

export default App;
