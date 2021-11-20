import React from 'react'
import './Main.scss'
import CardList from "../../Components/CardList/CardList"

const Main = props => {
  // console.log(props);
  const beers=props.beers;
  console.log(beers);

  return(

    <div className="main">
    <center>
    <h2> Welcome to the Beer World </h2>
    </center>
    <CardList beers={beers} />
    </div>
  )
}

export default Main