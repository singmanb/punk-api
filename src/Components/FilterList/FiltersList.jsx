import React from 'react'
import "./FilterList.scss"

import FilterItem from "../FilterItem/FilterItem.jsx"

const FiltersList = props => {
  const handleChkBox=props.handleChkBox;

  return(

    <div className="filterslist">
    <FilterItem filterId="highABV" filterCriteria="High ABV (>6.0%)" handleChkBox={handleChkBox}/>

    <FilterItem filterId="classicRange" filterCriteria="Classic Range" handleChkBox={handleChkBox}/>

    <FilterItem filterId="acidic" filterCriteria="Acidic (ph < 4)" handleChkBox={handleChkBox} />

    </div>
  )
}

export default FiltersList