import React, { Component } from "react";
import "../index.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="search-btn">
          <input />
          <button id="search">Search</button>
        </div>
      </div>
    );
  }
}
