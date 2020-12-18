import React, { Component } from "react";
import NavBarPage from "./NavBarPage";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarPage />
        <h1>Home Page</h1>
        <p>Here is a description of our restaurant!</p>
      </div>
    );
  }
}
export default HomePage;
