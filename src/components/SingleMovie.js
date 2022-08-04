import { Component } from "react";

export default class SingleMovie extends Component {
    render() {
        return (

            <div key={this.props.idx}>

                <h3>Movie Title: {this.props.info.title}</h3>
                <p>{this.props.info.overview}</p>
                {/* <img src={item.image_url} alt={item.title}/> */}
                <p>{this.props.info.released_on}</p>
                <p>{this.props.info.average_votes}</p>

            </div>
        )
    }
}