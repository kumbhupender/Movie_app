import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import movies from "./reducers";

//creating a store
const store = createStore(movies);
console.log(store);
// console.log("State", store.getState());

// store.dispatch({
//   //adding action and it will go to reducer
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("After State", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
