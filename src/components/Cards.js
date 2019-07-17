import React, { Component } from "react";

export default class Objects extends Component {
  render() {
    return (
      <div className="card">
        {/* Title */}
        {this.props.data ? (
          <h1>{this.props.data[0].title}</h1>
        ) : (
          <svg viewBox="0 0 100 20">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#326384" />
                <stop offset="95%" stopColor="#123752" />
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="120"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="url(#gradient)"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#wave)"
              fillOpacity="0.6"
            >
              LOADING
            </text>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#gradient)"
              fillOpacity="0.1"
            >
              LOADING
            </text>
          </svg>
        )}
        {this.props.data ? (
          <h3>{this.props.data[0].date}</h3>
        ) : (
          <svg viewBox="0 0 100 20">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#326384" />
                <stop offset="95%" stopColor="#123752" />
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="120"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="url(#gradient)"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#wave)"
              fillOpacity="0.6"
            >
              LOADING
            </text>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#gradient)"
              fillOpacity="0.1"
            >
              LOADING
            </text>
          </svg>
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
            align="middle"
          />
        ) : (
          <svg viewBox="0 0 100 20">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#326384" />
                <stop offset="95%" stopColor="#123752" />
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="120"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="url(#gradient)"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#wave)"
              fillOpacity="0.6"
            >
              LOADING
            </text>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#gradient)"
              fillOpacity="0.1"
            >
              LOADING
            </text>
          </svg>
        )}
        {/* Description */}
        {this.props.data ? (
          <p>{this.props.data[0].explanation}</p>
        ) : (
          <svg viewBox="0 0 100 20">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#326384" />
                <stop offset="95%" stopColor="#123752" />
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="120"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="url(#gradient)"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#wave)"
              fillOpacity="0.6"
            >
              LOADING
            </text>
            <text
              textAnchor="middle"
              x="50"
              y="15"
              fontSize="17"
              fill="url(#gradient)"
              fillOpacity="0.1"
            >
              LOADING
            </text>
          </svg>
        )}
      </div>
    );
  }
}
