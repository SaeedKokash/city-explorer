import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      allCity: {},
      map: {}
    }
  }


  getCityName = async (e) => {
    e.preventDefault();

    const cityData = await axios.get(`https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${e.target.userCityInput.value}&format=json`)

    // const cityMap = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.allCity.lat,this.state.allCity.lon}&zoom=10`)


    console.log(e.target.userCityInput.value);
    // console.log(cityData.data);

    this.setState({
      userInput: e.target.userCityInput.value,
      allCity: cityData.data[0],
      // map: cityMap.data

    });
  }


  render() {
    return (
      <div className="App">
        <h1> {process.env.REACT_APP_TITLE}</h1>
        <Form onSubmit={this.getCityName}>
          <Form.Label htmlFor="text" id='userCityInput' >Enter City Name </Form.Label>
          <Form.Control type="text" id="userCityInput" />
          <Button variant="primary" type="submit">Explore! </Button>
        </Form>

        <p>City Name: {this.state.allCity.display_name}</p>
        <p>City latitude: {this.state.allCity.lat} </p>
        <p>City longitude: {this.state.allCity.lon}</p>

        {/* <img src={this.state.map}></img> */}


      </div>
    );
  }
}

export default App;