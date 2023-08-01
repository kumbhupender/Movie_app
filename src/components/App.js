import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
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
          {data.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
