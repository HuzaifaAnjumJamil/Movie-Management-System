import React from 'react'

const Header = () => {
    return (
        <div className="topnav">
            <a className="logo" href="/">Movie Management System</a>
            <from className="search-container">
                <a href="/">Add Movies</a>
                <input type="search" placeholder="Search.." name="search" id="search" />
                <button type="submit" className="search-button"><i className="fa fa-search"></i></button>
            </from>
        </div>
    );
}

export default Header;
