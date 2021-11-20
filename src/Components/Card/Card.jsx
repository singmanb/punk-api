import React from 'react'
import './Card.scss'

const Card = props => {
  const {beer} = props;

  return (
    <div className ="card">
    <h3> {beer.name} </h3>
    <h4> {beer.tagline} </h4>
        <h4> ABV: {beer.abv}</h4>
    <h4> PH: {beer.ph}</h4>
    <h4> First Brewed: {beer.first_brewed} </h4>
    {/* <div className="bottle"> */}
    
    <img className="album-tiles__img" src={beer.image_url} alt="" /> 
</div>
    // </div>
  )
}

export default Card