import React from 'react'
import axios from 'axios'

class CocktailsShow extends React.Component {
  constructor() {
    super()

    this.state = {
      cocktail: null
    }
  }


  componentDidMount() {
    const cocktailId = this.props.match.params.id
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic/${cocktailId}`)
      .then(res => this.setState({ cocktail: res.data.drinks }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.cocktail) return null
    const { cocktail } = this.state
    return (
        <div className="container">
          <h2 className="title">{cocktail.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={cocktail.strDrinkThumb} alt={cocktail.name} />
              </figure>
            </div>
            </div>
            </div>
            )
          }
        }
        
export default CocktailsShow