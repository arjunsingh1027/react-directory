import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group" style={{ display: 'flex' }}>
                <label htmlFor="search"></label>
                <input
                    name="search"
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search for Employee"
                    onChange={props.handleInputChange}
                    value={props.value}
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    )
}


export default Search;