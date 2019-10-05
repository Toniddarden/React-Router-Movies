import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <NavLink to="/" activeClassName="">
      <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;

//navNavLink is a NavLink with a ActiveClassName
// create a function using props.history.push passing in 2 props
// then pass that function's props through a onClick function inside of the div
