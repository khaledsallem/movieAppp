import react, { Component } from "react";

class Movie extends Component {

    render() {
        return (
            <div className="card" style={{width: "18px;"}}>
                <img src={this.props.img}></img>
                <h4>{this.props.nom}</h4>
                <p>{this.props.année}</p>
                <p>{this.props.genre}</p>
                <p>{this.props.nationalité}</p>
            </div>

        )
    }
}

export default Movie;