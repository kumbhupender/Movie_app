import { data } from "../data";
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    //make api call

    //dispatch the action
    store.dispatch(addMovies(data));

    console.log("After state", this.props.store.getState());
  }

  isMovieFav = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  };

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();

    console.log("Render", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        {/* navbar */}
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div
              className={`tab mov-tab ${showFavourites ? "" : "active-tabs"} `}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab fav-tab ${showFavourites ? "active-tabs" : ""} `}
              onClick={() => this.changeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  dispatch={this.props.store.dispatch}
                  key={`movies-${index}`}
                  isMovieFav={this.isMovieFav(movie)}
                />
              );
            })}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
