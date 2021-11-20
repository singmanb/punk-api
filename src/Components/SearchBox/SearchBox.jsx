import React from 'react'
import './SearchBox.scss'

const SearchBox=props => {
const {searchText, handleInput}=props;
return (
  <form className="search-box" >
  <input type="text" name="searchBox" field="Search" value ={searchText} onInput={handleInput} className="Search-box__input" />
  </form>
)
}

export default SearchBox