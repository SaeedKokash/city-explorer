import { Component } from "react";
import WeatherDay from "./WeatherDay";

export default class Weather extends Component {
    render() {
        return (
            <>
                {this.props.weatherInformation.map((item, idx) => 
                    <WeatherDay dayData={item} key={idx}/>
                )
                }
            </>

        )
    }
}
