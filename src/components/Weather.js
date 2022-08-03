import { Component } from "react";

export default class Weather extends Component {
    render() {
        return (
            <>
                {this.props.weatherInformation.map((item, idx) => 
                    <li key={idx}>{item.date} : {item.description}</li>
                )
                }
            </>

        )
    }
}
