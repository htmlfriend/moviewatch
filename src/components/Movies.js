import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movies.css";
import { Link } from "react-router-dom";

export class Movies extends Component {
  render() {
    const {
      id,
      year,
      title,
      summary,
      torrents,
      small_cover_image,
      genres,
    } = this.props.movie;
    return (
      <div className='movie'>
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              year,
              id,
              title,
              summary,
              torrents,
              small_cover_image,
              genres,
            },
          }}
        >
          <img src={small_cover_image} alt={title} title={title} />
          <div className='movie__column'>
            <h3 className='movie__title'>{title}</h3>
            <ul className='movie__genres'>
              {genres.map((genre, index) => {
                return (
                  <li key={index} className='genres__genre'>
                    {genre}
                  </li>
                );
              })}
            </ul>
            <h4 className='movie__year'>{year}</h4>
            <p className='movie__summary'>{summary.slice(0, 140)}....</p>
            <ul className='torrents'>
              {torrents.map((torrent, index) => (
                <li className='torrents__torent'>
                  <a key={index} href={torrent.url}>
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    );
  }
}

Movies.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movies;
