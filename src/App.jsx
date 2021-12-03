import React, {useState, useEffect} from 'react'
import './App.scss'
import NavBar from './Components/NavBar/NavBar.jsx'
import Main from './Containers/Main/Main.jsx'


const App = () => {

  // saving values from API using useState method
  const [beers, setBeers] = useState([]);
  useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
       .then(res => res.json())
    // .then(data => setUser(data))
    .then(beers => setBeers(beers))
    .catch(err => console.log(err))
  },[]);
  console.log(beers);

  
  const [searchText, setSearchText] = useState("");
  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchText(cleanInput);
  };
  
  const [highABV, setHighABV]=useState(false);
  const [classicRange, setClassicRange]=useState(false);
  const [acidic, setAcidic] = useState(false);
  const handleChkBox=(filterId)=> {
    switch(filterId) {
      case "highABV":
      setHighABV(!highABV);
      return;
      case "classicRange":
      setClassicRange(!classicRange);
      return;
      case "acidic":
      setAcidic(!acidic);
      return;
    }
  }

 
  const filteredBeers=beers.filter(beer=> {
    const beerNameLowerCase=beer.name.toLowerCase();

    if(!beerNameLowerCase.includes(searchText)){
      return false;
    } else if(highABV && (beer.abv<6)){
      return false;
    } else if (classicRange && (beer.first_brewed.split("/")[1]> 2010)) {
      return false;
    } else if(acidic && (beer.ph > 4)){
      return false;
    }
    return true;
    })
  
  return (

    <div className="app">
    
    <NavBar className="navbar" searchText={searchText} handleInput={handleInput} handleChkBox={handleChkBox}/>
    <Main beers={filteredBeers} className="main" />
    </div>
  )
}
export default App