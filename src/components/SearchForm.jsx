import React from "react";
import "../styles/SearchForm.css"

function SearchForm ({ handleSearchChange }){
    return (
        <div className="searchform">
            <form className="form-inline">
                <input className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e=> handleSearchChange(e)}
                />
            </form>
        </div>
    );
}

export default SearchForm;