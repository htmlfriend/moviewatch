import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export class Navigaion extends Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/'>Main page</Link>
        <Link
          to={{
            pathname: "/about",
            state: {
              fromLocation: true,
            },
          }}
        >
          About page
        </Link>
      </div>
    );
  }
}

export default Navigaion;
