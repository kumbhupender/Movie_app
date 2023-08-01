import React, { Component } from "react";

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

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

            <button className="fav"> Favourites</button>
          </div>
        </div>
      </div>
    );
  }
}
