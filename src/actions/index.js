//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
//called action creators whiich got to reducers
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

//called action creators whiich got to reducers
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

//FOR REMOVING THE MOVIE IN FAV
export function removeFavourites(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}

export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
