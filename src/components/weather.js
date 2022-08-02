import { Component } from "react";

export default class Weather extends Component {
    render() {
        return (
            <>
                {
                    this.props.weather.map((item, idx) => {
                        return (

                            <div key={idx}>
                                <p>{item.date}</p>
                                <p>{item.description}</p>
                            </div>

                        )
                    })
                }

            </>

        )
    }
}