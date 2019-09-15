import React from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Yelp from '../../util/Yelp.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      if (sortBy === 'rating'){
        businesses = businesses.sort((a, b) => {
          if (a.rating > b.rating) {return -1}
          if (a.rating < b.rating) {return 1}
          return 0
        })
      }
      if (sortBy === 'review_count'){
        businesses.sort((a, b) => {
          if (a.reviewCount > b.reviewCount) {return -1}
          if (a.reviewCount < b.reviewCount) {return 1}
          return 0
        })
      }

      this.setState({
        businesses: businesses
      })
      console.log(this.state.businesses)
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
