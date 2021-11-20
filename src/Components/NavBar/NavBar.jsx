import React from 'react'
import './NavBar.scss'
import SearchBox from "../SearchBox/SearchBox"
import FiltersList from "../FilterList/FiltersList"

const NavBar = props => {
  const {searchText,handleInput,handleChkBox}=props ;
  return (

    
    <div className="navbar">
    <h1> Find your Beer !</h1>
    <SearchBox searchText={searchText} handleInput={handleInput} />

    <FiltersList handleChkBox={handleChkBox} />

    </div>
     )
}
export default NavBar