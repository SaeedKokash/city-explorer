import { Component } from "react"


export default class Movie extends Component {
    render() {
        return (
            this.props.movie.map((item, idx) =>

                <div key={idx}>

                    <h3>Movie Title: {item.title}</h3>
                    <p>{item.overview}</p>
                    {/* <img src={item.image_url} alt={item.title}/> */}
                    <p>{item.released_on}</p>
                    <p>{item.average_votes}</p>
                </div>

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