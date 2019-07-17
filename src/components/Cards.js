import React, { Component } from "react";

export default class Objects extends Component {
  render() {
    return (
      <div className="card">
        {/* Title */}
        {this.props.data ? (
          <h1>{this.props.data[0].title}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
        {/* Youtube Video */}
        {this.props.data ? (
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
