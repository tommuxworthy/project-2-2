import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma'
import '../../src/style.scss'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="p1bg">
          <h1 className="title has-text-centered">Find the Perfect Cocktail...</h1>

          <div className="columns is-centered">
            <img src="https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg" height="300" width="300"></img>
            <img src="https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg" height="300" width="300"></img>
            <img src="https://www.thecocktaildb.com/images/media/drink/usuuur1439906797.jpg" height="300" width="300"></img>
            <img src="https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg" height="300" width="300"></img>
          </div>
          <div className="columns is-centered">
            <button className="button is-active is-pulled-left"><NavLink to="/random">Random Cocktail</NavLink></button>
            <button className="button is-active is-pulled-right"><NavLink to="/index">List All Cocktails</NavLink> </button>
          </div>
        </div>
      </>
    )
  }
}

export default Home