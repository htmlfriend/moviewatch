import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./App.css";
import axios from "axios";
import Movies from "./Movies";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({
      isLoading: false,
      movies,
    });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <section className='container'>
          {isLoading ? (
            <div className='loader'>
              <span className='loader__text'>Loading ...</span>
            </div>
          ) : (
            <div className='movies'>
              {movies.map((movie) => (
                <Movies key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}
export default App;
