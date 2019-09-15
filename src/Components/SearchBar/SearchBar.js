import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      location: '',
      sortBy:'best_match'
    }

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    }

    this.handleEnter = this.handleEnter.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : ''
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    })
  }

  handleTermChange(e) {
    this.setState({
        term: e.target.value
    })
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSearch(e){
    if (this.state.term && this.state.location && this.state.sortBy){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
      e.preventDefault()
    }
  }


  handleEnter(e){
    if (e.key === 'Enter'){
      this.handleSearch()
    }
  }

  renderSortByOption() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
            className={this.getSortByClass(sortByOptionValue)}
            key={sortByOptionValue + sortByOption}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >

        {sortByOption}
        </li>
      )
    })
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOption()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyPress={this.handleEnter}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleEnter}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;
