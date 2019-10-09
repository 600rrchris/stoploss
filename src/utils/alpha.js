const key = process.env.API_KEY
const BASE_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=`



function stock(symbol) {
    return fetch(BASE_URL + `${symbol}` + `&apikey=${key}`)
    .then(res => res.json())
}

export default stock;
