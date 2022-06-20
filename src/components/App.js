import React, { Component } from "react";
import unsplash from "../api/unsplash";
//Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images...
        <ImageList key={this.state.images.id} images={this.state.images} />
      </div>
    );
  }
}

export default App;
