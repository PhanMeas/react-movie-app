import React from "react";
import "./App.css";
// TODO: learn how imports work
import { TextField } from "@material-ui/core/";

class App extends React.Component {
  // local state object
  state = {
    // We will set the results from the OMDB API here
    result: {},
    // Initial value of the search input box
    search: ""
  };

  // What is the component life-cycle methods
  // componentDidMount first load
  componentDidMount() {
    // TODO: api call to OMDB with initial value
  }

  // TODO: searchMovies method to invoke our API method

  // TODO: handler for input change of input box
  handleInputChange = event => {
    console.log(event.target.value);
    const movieName = event.target.value;
    this.setState({ search: movieName });
  };
  // TODO: handler for submit button getting clicked

  render() {
    return (
      <div className="App">
        <table
          style={{
            backgroundColor: "#000",
            display: "block",
            color: "#fff"
          }}
        >
          <tbody>
            <tr>
              <td>
                <img src="movie_finder.png" />
              </td>
              <td width="8" />
              <td>
                <h3> Greatest Movie Finder</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <TextField
          id="standard-name"
          label="Movie Search"
          // value={values.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        {/* TODO: Add submit button */}
        {/* TODO: add card with movie data */}
      </div>
    );
  }
}

export default App;
