import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma'

const Home = () => (
  <>
    <h1 className="title has-text-centered">Cocktails</h1>
    <div className="columns is-centered">
      <input
        placeholder="Search Your Drink..!" />
    </div>
    <div className="columns is-centered">
      <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" height="300" width="300"></img>
      <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" height="300" width="300"></img>
      <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" height="300" width="300"></img>
      <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" height="300" width="300"></img>
    </div>
<NavLink to="/random">Random Cocktail</NavLink>
<NavLink to="/index">List All Cocktails</NavLink>
  </>

)

export default Home