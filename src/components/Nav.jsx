import React from "react";
import SearchForm from "./SearchForm";
import "../styles/Nav.css"

function Nav({ handleSearchChange }) {
    return (
        <nav className = "navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchForm handleSearchChange={handleSearchChange}/>
            </div>
        </nav>
    );
}

export default Nav;