import React from "react";

export default function SearchBar() {
    return (
        <div className="input-box">
            <input 
            type="search" 
            name="search-form"
            id="search-form"
            className="search-style"
            // onChange={(e)}
            placeholder="Search anything about diet..."
       />
        </div>
    )

}