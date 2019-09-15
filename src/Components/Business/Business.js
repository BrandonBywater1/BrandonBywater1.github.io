import React from 'react'
import './Business.css'

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a
          href={this.props.business.url}
          rel='noopener noreferrer'
          target="_blank">
            <img src={this.props.business.imageSrc === "" ? 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjtiraV-NLkAhUrzYUKHddlB64QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.independent.co.uk%2Flife-style%2Ffood-and-drink%2Fpineapple-pizza-topping-hawaiian-debate-food-a8884211.html&psig=AOvVaw05e0cO4sKr5YLE5pP1DGMA&ust=1568640707254314' : this.props.business.imageSrc} alt=''/>
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state + " " +  this.props.business.zipcode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">Rating: {this.props.business.rating}</h3>
            <p>Total Reviews: {this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
