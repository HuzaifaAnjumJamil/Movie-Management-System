import React, { Component } from 'react'
import Movie from '../components/Movie'

export default class Movies extends Component {
    state = {
        movies: [
            { id: 1, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 2, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 3, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 4, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 5, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 6, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
            { id: 7, name: 'John Wick Parabellum', genre: 'Action', year: '2019' },
        ]
    }
    render() {
        return (
            <div className="movies">
                {this.state.movies.map((movie) => {
                    return <Movie key={movie.id}
                        name={movie.name}
                        genre={movie.genre}
                        year={movie.year} />
                })}
            </div>
        )
    }
}
