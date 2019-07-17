import React, { Component } from "react";
import axios from "axios";
import Cards from "./components/Cards";

export default class Data extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=2019-07-17`
      )
      .then(response => {
        this.setState({
          data: [response.data]
        });
      });
  }

  render() {
    console.log("data", this.state.data);
    return <Cards data={this.state.data} />;
  }
}
