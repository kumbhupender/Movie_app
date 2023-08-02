import React, { Component } from "react";
import { addFavourite, removeFavourites } from "../actions";

export default class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;

    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourites(movie));
  };

  render() {
    const { movie, isMovieFav } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <div className="movie-img">
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          <div className="right">
            <div className="title">{movie.Title}</div>

            <div className="Plot">{movie.Plot}</div>

            <div className="rating">
              <span style={{ color: "black", fontSize: "1.2rem" }}>imbd :</span>{" "}
              {movie.imdbRating}
            </div>

            {isMovieFav ? (
              <button
                className="fav unfav"
                onClick={this.handleUnFavouriteClick}
              >
                {" "}
                UnFavourites
              </button>
            ) : (
              <button className="fav" onClick={this.handleFavouriteClick}>
                {" "}
                Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
