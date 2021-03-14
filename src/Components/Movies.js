import React, { Component } from 'react';
import Movie from "./Movie";

class Movies extends Component {

    state = {
        movies: [
            {
                img : "https://s3-ap-northeast-1.amazonaws.com/peatix-files/event/1582558/cover-w6r2UxpjxewuOGrOFAyExiU48dTFBPQk.jpeg",
                nom: "Greenland",
                année: 2020,
                genre: 'Action',
                nationalité: 'Americaine'
            },
            {
                img : "https://s3-ap-northeast-1.amazonaws.com/peatix-files/event/1582558/cover-w6r2UxpjxewuOGrOFAyExiU48dTFBPQk.jpeg",
                nom: "John wick",
                année: 2020,
                genre: 'Action',
                nationalité: 'Americaine'
            },
            {
                img : "https://s3-ap-northeast-1.amazonaws.com/peatix-files/event/1582558/cover-w6r2UxpjxewuOGrOFAyExiU48dTFBPQk.jpeg",
                nom: "Where's my money",
                année: 2020,
                genre: 'Comédie',
                nationalité: 'Americaine'
            },
            {
                img : "https://s3-ap-northeast-1.amazonaws.com/peatix-files/event/1582558/cover-w6r2UxpjxewuOGrOFAyExiU48dTFBPQk.jpeg",
                nom: "Where's my money",
                année: 2020,
                genre: 'Comédie',
                nationalité: 'Americaine'
            },
        ]
    }
    render() {
        return (
            <div>
                {this.state.movies.map(movie =>(
                    <Movie 
                    img={movie.img}
                        nom={movie.nom}
                        année={movie.année}
                        genre={movie.genre}
                        nationalité={movie.nationalité}
                    />
                ))}
            </div>
        )
    }
}



export default Movies;
