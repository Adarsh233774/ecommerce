import React from 'react';
import "./SearchBar.css";
import { FaSearch} from "react-icons/fa"

function SearchBar() {
  return (
    <>
        <div className="SearchBar_container">
            <div className="SearchBar_container2">
                <div className="search_div">
                    <input type="text" className='iBox_SearchBar' placeholder='Search for Cources'/>
                    <FaSearch className='searchIcon_searchBar'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar