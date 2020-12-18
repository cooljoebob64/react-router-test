import React, { Component } from "react";

import NavBarPage from "./NavBarPage";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBarPage />
        <h1>About Us</h1>
        <p>This sure is some info about us!</p>
      </div>
    );
  }
}

export default AboutPage;
