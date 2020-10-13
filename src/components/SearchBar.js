import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="searchbar">
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input type="text" onChange={props.changeSearch} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SearchBar;