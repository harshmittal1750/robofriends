import "./App.css";
import React, { Component } from "react";
import CardList from "./components/CardList";
import { robots } from "./components/robots";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>
          {" "}
          <span
            className="f1  lh-solid  "
            style={{ fontFamily: "Shizuru", color: "lime", fontSize: "4rem" }}
          >
            RoboFriends
          </span>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
