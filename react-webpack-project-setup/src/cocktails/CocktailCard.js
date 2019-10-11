import React from 'react'

const CocktailCard = ({ strDrink, strDrinkThumb, strInstructions }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{strDrink}</h4>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={strDrinkThumb} alt={name} />
        </figure>
        <div className="card-content">
          <h5 className="title is-6">{strInstructions}</h5>
        </div>
      </div>
    </div>
  </div>
)

export default CocktailCard