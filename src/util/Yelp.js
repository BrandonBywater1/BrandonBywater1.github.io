const apiKey = 'KXjA3MNYi0RHWqxSgDELtE5yC4-ileMc0eFVoHZTC80rBkas9U-g9VnCOlsBVVH6xXedpD4JnCoxhBCaaKSrpzFJugGNc1oZPokbcxCS8ZviviTxLPQiKxD10S5-XXYx'

// Stores all functionality for Yelp.api interaction
const Yelp = {
  // Method for performing search
  search: function(term, location, sortBy) {
    // Perform the fetch passing in url and credentials
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    // Get the JSON response and pass it into the next .then call.
    }).then(response => {
      return response.json()
    // Go through every business and map an object with appropriate information
    }).then(jsonResponse => {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            // If an image is not supplied -- set to default
            imageSrc: business.image_url === "" ? 'https://flockler.com/thumbs/sites/192/james-morton-pizza_s0x1000_q60_noupscale.jpg' : business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipcode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            url: business.url,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
};

export default Yelp;
