import React, { Component } from "react";
import "./Detail.css";

export class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='about__container'>
          <p>
            About the film : <span>{location.state.title}</span>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
