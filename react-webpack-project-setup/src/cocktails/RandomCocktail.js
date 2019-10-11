import React from 'react'
import axios from 'axios'

import CocktailCard from './CocktailCard'

class RandomCocktail extends React.Component {
  constructor() {
    super()

    this.state = {
      cocktail: null
    }
  }
  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => this.setState({ cocktail: res.data.drinks[0] }))
      .catch(err => console.log(err))
  }




  render() {
    if (!this.state.cocktail) return null
    const { cocktail } = this.state
    console.log(cocktail)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">

            <CocktailCard {...cocktail} />

          </div>
        </div>
      </section>
    )
  }
}

export default RandomCocktail