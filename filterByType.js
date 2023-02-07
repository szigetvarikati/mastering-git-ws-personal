const getBeers = require('./data')

function main(type) {
    return type.filter(x=> x.type.includes('Ale'))

}

console.log(main(getBeers()))

// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE