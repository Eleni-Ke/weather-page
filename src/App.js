import "./App.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { IoOptions } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import SearchResults from "./Components/SearchResults";
import CityWeather from "./Components/CityWeather";
import { Container } from "react-bootstrap";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = {
    city: {
      name: "Karlsruhe",
      coordinates: {
        lon: 8.3858,
        lat: 49.0047,
      },
    },
  };
  changeCity = (nameFromInput) => {
    console.log(nameFromInput);
    this.setState({
      city: {
        ...this.state.city,
        name: nameFromInput,
      },
    });
  };
  changeCoordinates = (lonFromInput, latFromInput) => {
    console.log("before change", this.state.city);
    this.setState({
      city: {
        ...this.state.city,
        coordinates: {
          lon: lonFromInput,
          lat: latFromInput,
        },
      },
    });
    console.log("after change", this.state.city);
  };
  render() {
    return (
      <BrowserRouter>
        <Container fluid className="top-row">
          <Link className="nav-link" to="/">
            <IoOptions />
          </Link>
          <Routes>
            <Route path="/" element={<h1>{this.state.city.name}</h1>} />
            <Route
              path="/search-page"
              element={
                <SearchBar
                  selectedCityFromApp={this.state.city}
                  changeSelectedCityFromApp={this.changeCity}
                />
              }
            />
          </Routes>

          <Link className="nav-link" to="/search-page">
            <BsPlusCircle />
          </Link>
        </Container>
        <Container fluid className="main-section">
          <Routes>
            <Route path="/search-page" element={<SearchResults />} />
            <Route
              path="/"
              element={
                <CityWeather
                  selectedCityFromApp={this.state.city}
                  changeCoordinatesFromApp={this.changeCoordinates}
                />
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
