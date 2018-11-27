import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/header.js";
class App extends Component {
  render() {
    return <div className="App">Hello
          <Header />
      </div>;

  }
}

export default App;
