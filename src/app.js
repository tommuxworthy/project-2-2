import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'

import Home from '../src/common/Home'
import RandomCocktail from './cocktails/RandomCocktail'
import CocktailsIndex from './cocktails/CocktailsIndex'
import CocktailsShow from './cocktails/CocktailsShow'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/random" component={RandomCocktail} />
      <Route path="/show" component={CocktailsShow} />
      <Route path="/index" component={CocktailsIndex} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)