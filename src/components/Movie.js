import React from 'react'

const Movie = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h2>{props.name}</h2>
                <h4>{props.genre} - {props.year}</h4>
            </div>
        </div>
    );
}

export default Movie;