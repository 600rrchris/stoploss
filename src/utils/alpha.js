const key = process.env.API_KEY
const BASE_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=`



function stock() {
    return fetch(BASE_URL + `${symbol}` + `&interval=5min&apikey=${key}`)
    .then(res => res.json())
}

