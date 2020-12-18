import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class NavBarPage extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/menu">
          <Button>Menu</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </div>
    );
  }
}
export default NavBarPage;
