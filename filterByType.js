const getBeers = require('./data')

function main(type) {
    console.log('type:', type)
    const beers = getBeers()
    const filtered = beers.filter(function (beer) {
        return beer.type.includes(type)
    })
    filtered.forEach(function (beer) {console.log(beer.name) })
    //ez itt lent a szép és rövid, csak bele van égetve az "Ale"
   // return type.filter(x=> x.type.includes('Ale'))

}

console.log(main(getBeers()))

// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE