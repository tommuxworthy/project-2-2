import React from 'react'
import axios from 'axios'

import CocktailCard from './CocktailCard'

class CocktailsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      cocktails: null
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => this.setState({ cocktails: res.data.drinks }))
      .catch(err => console.log(err))
  }





  render() {
    if (!this.state.cocktails) return null
    console.log(this.state.cocktails)
    return (
      <section className="p1bg section">
        <h1 className="title has-text-centered">All Cocktails</h1>
        <div className="container">
          <div className="columns is-mobile is-multiline">

            {this.state.cocktails.map(cocktail => {
              console.log(cocktail)
              return <CocktailCard key={cocktail.idDrink} {...cocktail} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default CocktailsIndex