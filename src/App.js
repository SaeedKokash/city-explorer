import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import DisplayedInformation from './components/DisplayedInformation';
import Map from './components/Map';
import ErrorComp from './components/ErrorComponent';
import Weather from './components/Weather';
import Movie from './components/Movie';


//new solve for the application

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      map_src: '',
      displayInfo: false,
      errorMessage: '',
      displayError: false,
      weather: [],
      isWeather: false,
      movies: [],
      isMovie: false,
    }
  }



  // function (method) that will show location when the user enters a city name and CLICK SUBMIT - onsubmit function
  displayLocation = async (e) => {
    e.preventDefault();

    // to get the user input and place it in searchQuery variable
    const searchQuery = e.target.searchQuery.value;

    // put the location url that will get the data in a variable so it would be easy to read - q should be the user input which we declared as searchQuery
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;

    // trying if there is a city correct, if not then the error will appear
    try {
      // get the data from the link by using axios with await and async in the funciton
      const city = await axios.get(url)

      // to change the data from empty to the fetched data from axios through GET method by using the link provided
      this.setState({
        display_name: city.data[0].display_name,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInfo: true,
        displayError: false
      })

      // to place the grabbed data from the state and place then in this display map arguments so that it could show the map quick without errors
      this.displayMap(city.data[0].lat, city.data[0].lon);

      // to place the grabbed data from the state and place then in this display map arguments so that it could show the map quick without errors
      this.displayWeather(searchQuery, city.data[0].lat, city.data[0].lon);

      // to place the grabbed data from the state and place then in this display map arguments so that it could show the map quick without errors
      this.displayMovie(searchQuery);


      // here we catch the error and we change state to display it on screen  
    } catch (error) {
      console.log(error);
      this.setState({
        displayInfo: false,
        displayError: true,
        errorMessage: error.response.status + ": " + error.response.data.error
      })
    }
  }




  // function (method) to have the image and place it in state to send it to MAP.js component
  displayMap = (lat, lon) => {

    // created a variable that will hold the map url that we got from trello, combined it with our key, new lat and lon that were updated by setState that were taken from axios
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${lat},${lon}&zoom=13`;

    // to change the map_src to the new mapSrc so we can pass it to Map.js file as props to display image
    this.setState({
      map_src: mapSrc,
    })
  }


  // function (method) to have the weather data and place it in state to send it to MAP.js component
  displayWeather = async (searchQuery, lat, lon) => {

    try {
      const url = `https://city-explorer-js03.herokuapp.com/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`
      const weatherData = await axios.get(url);

      this.setState({
        isWeather: true,
        weather: weatherData.data
      })

    } catch (error) {
      this.setState({
        isWeather: false,
        displayError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error,
        displayInfo: false
      })
    }
  }


  // function (method) to have the movies data and place it in state to send it to Movie.js component
  displayMovie = async (searchQuery) => {
    try {

      const url = `https://city-explorer-js03.herokuapp.com/movies?searchQuery=${searchQuery}`
      const movieData = await axios.get(url);

      this.setState({
        movies: movieData.data,
        isMovie: true
      })

    } catch (error) {

      this.setState({
        isMovie: false
      })
    }
  }

  render() {
    return (
      <div className="App">

        <h1> City Explorer</h1>

        <SearchForm submitHandler={this.displayLocation} />

        {this.state.displayInfo &&
          <>
            <DisplayedInformation cityInfo={this.state} />
            <Map mapSource={this.state.map_src} />
          </>
        }

        {this.state.isWeather &&
          <Weather weatherInformation={this.state.weather} />

        }

        {this.state.isMovie &&
          <Movie movie={this.state.movies} />

        }


        {this.state.displayError &&
          <ErrorComp errorMessage={this.state.errorMessage} />

        }
      </div>

    )
  }
}

export default App;