import React from "react";
import "./App.css";
// TODO: learn how imports work
import { TextField, Button, Card, CardContent } from "@material-ui/core/";
import API from "./utils/API";
import { tsExpressionWithTypeArguments } from "@babel/types";

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
  searchMovies = movieName => {
    API.search(movieName)
      .then(response => {
        console.log("Data from OMDB", response.data);
        this.setState({ result: response.data });
      })
      .catch(err => console.log(err));
  };

  // TODO: handler for input change of input box
  handleInputChange = event => {
    console.log(event.target.value);
    const movieName = event.target.value;
    this.setState({ search: movieName });
  };
  // TODO: handler for submit button getting clicked
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("FormSubmit");
    this.searchMovies(this.state.search);
  };

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
        <Button
          onClick={this.handleFormSubmit}
          color={"primary"}
          variant={"contained"}
        >
          find a movie
        </Button>
        {/* TODO: add card with movie data */}
        <Card>
          {this.state.result.Title ? (
            <CardContent>
              <h1>{this.state.result.Title}</h1>
              <img alt={"Movie"} src={this.state.result.Poster} />
              <p>
                {this.state.result.Actors}
              </p>
            </CardContent>
          ) : (
            <h1>No Result to Display</h1>
          )}
        </Card>
      </div>
    );
  }
}

export default App;
