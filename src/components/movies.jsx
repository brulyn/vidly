import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    deleteMovie(movie._id);
    this.setState(this.state.movies);
    console.log(movie);
  };

  render() {
    const { length } = this.state.movies;
    if (length === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <p>Showing {length} movies</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  getMovieNumbers = () => {
    let len = this.state.movies.length;

    return len === 0 ? (
      <p>There are no movies in the database</p>
    ) : (
      <p>Showing {len} movies in the Database</p>
    );
  };
}

export default Movie;
