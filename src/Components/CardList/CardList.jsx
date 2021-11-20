import React from 'react'
import './CardList.scss'
import Card from "../Card/Card.jsx"

const CardList = props => {
  console.log(props);
  const beers=props.beers;
  console.log(beers);

  return(

    <div className="cardlist">
    {
      beers.map(beer =>(
         <Card name={beer.id} beer={beer} />
        
      ))
    }
    </div>
  )
}

export default CardList