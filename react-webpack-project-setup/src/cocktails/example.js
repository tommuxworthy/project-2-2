// constructor() {
//   super()

//   this.state = {
//     cocktails: [],
//     search: ''
//   }
//   this.handleChange = this.handleChange.bind(this)
// }


//           componentDidMount() {
//     axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
//       .then(res => this.setState({ cocktails: res.data }))
//       .catch(err => console.log(err))
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   filteredCocktails() {
//     const { search, cocktails } = this.state
//     const re = new RegExp(search, 'i')
//     return cocktails.filter(cocktail => {
//       return re.test(cocktail.strDrink)
//     })
//   }


// <div className="cocktailsFiltered">
//           {this.filteredCocktails().map(cocktail => <CocktailCard key={cocktail.idDrink} {...cocktail} />)}

         
     



// from home
// <input
// placeholder="Search Your Drink..!" />

         