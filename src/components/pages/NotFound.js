import React, { Component } from "react";

export default class notFound extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">
          <span className="text-danger">404 Page Not Found</span>
        </h1>
        <p className="lead">Sorry, that page does not exits</p>
      </div>
    );
  }
}
