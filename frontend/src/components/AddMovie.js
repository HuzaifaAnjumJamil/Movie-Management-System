import React from 'react'

const AddMovie = () => {
    return (
        <div className="addMovie">
            <form onSubmit={() => alert('Movie added successfully')}>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Genre</label>
                <input type="text" name="genre" required />
                <label>Year</label>
                <input type="text" name="year" placeholder="optional" />
                <button type="submit">Add Movies</button>
            </form>
        </div>
    );
}

export default AddMovie;