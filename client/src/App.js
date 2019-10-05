import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
    <NavLink to='/movies'>All Movies</NavLink>
      <div>
        <Route
          exact
          path="/movies"
          render={props => {
            return <MovieList {...props} />;
          }}
        />
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} />;
          }}
        />
      </div>
    </div>
  );
};

export default App;
