import { Component } from "react"
import SingleMovie from "./SingleMovie"


export default class Movie extends Component {
    render() {
        return (
            this.props.movie.map((item, idx) =>

                <SingleMovie info={item} key={idx}/>

            )
        )
    }
}

// movie.title;
//     this.overview = movie.overview;
//     this.average_votes = movie.vote_average;
//     this.total_votes = movie.vote_count;
//     this.image_url = movie.poster_path;
//     this.popularity = movie.popularity;
//     this.released_on = movie.release_date