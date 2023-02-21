import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import moment from "moment/moment";
import "semantic-ui-css/semantic.min.css";
import FeedExampleBasic from "./feed";
import unsplash from "./unsplash";

// component searchbar
class SearchBar extends React.Component {
  state = { terms: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

// component app (menampilkan image dari API)
class App extends React.Component {
  state = { images: [] };

  // fungsi saat submit data dari searchbar
  onSearchSubmit = async (term) => {
    // memanggil fungsi unsplash
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    // const image = response.data.results;
    // console.log(response.data.results);
    console.log(this.state.images[0].urls.regular);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* render searchbar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div class="ui grid">
          <div class="four column row">
            {/* looping data untuk menampilkan hasil gambar */}
            {this.state.images.map((data, index) => (
              <div class="column " style={{ paddingTop: "20px" }}>
                <img src={data.urls.thumb} class="ui image rounded" style={{ height: "250px", width: "250px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const search = ReactDOM.createRoot(document.getElementById("search"));
search.render(<App />);
