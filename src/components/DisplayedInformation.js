import { Component } from "react";

export default class DisplayedInformation extends Component {
    render() {
        return (
            <div>
                <p>City Name: {this.props.cityInfo.display_name}</p>
                <p>City latitude: {this.props.cityInfo.latitude} </p>
                <p>City longitude: {this.props.cityInfo.longitude}</p>
            </div>
        )
    }
}