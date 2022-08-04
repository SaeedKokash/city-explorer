import { Component } from "react";

export default class WeatherDay extends Component {
    render() {
        return (
            <>
            <li key={this.props.idx}>{this.props.dayData.date} : {this.props.dayData.description}</li>
            </>
        )
    }
}