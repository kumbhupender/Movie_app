//action types
export const ADD_MOVIES = "ADD_MOVIES";

//called action creators whiich got to reducers
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
