import { data } from "../data";
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    //make api call

    //dispatch the action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("state", this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState();
    console.log("Render");
    return (
      <div className="App">
        {/* navbar */}
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab fav-tab">Favorites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
