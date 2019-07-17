import React, { Component } from "react";

export default class Objects extends Component {
  render() {
    return (
      <div className="card">
        {this.props.data ? (
          <h1>{this.props.data[0].title}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
        {this.props.data ? (
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
