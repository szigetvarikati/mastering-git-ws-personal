const getBeers = require('./data')

function main(property) {
    return property.filter(x=> x.abv >= 7)

}

console.log(main(getBeers()))

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score