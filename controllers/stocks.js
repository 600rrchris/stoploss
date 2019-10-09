const User = require('../models/user');
const stockApi = require('../src/utils/alpha')

module.exports = {
    getAllStock,
    deleteStock,
    editStock,
    createStock
  };

  function getAllStock(req, res) {
    User.findById(req.body._id)
    .then( s =>{
        console.log(s)
        res.status(200).json(s.stock)
    })

  }

  function deleteStock() {

  }

  function editStock() {
      
  }

  function createStock() {
    let id = req.body.user._id
    let ticker = req.body.ticker
    let price = req.body.results
    let volume = req.body.volume
    User.findById(id)
    .then( s => {
      let stock = {
        ticker,
        price,
        volume,
      }
      s.stock.push(stock)
      s.save(()=> {
        res.status(201).json(stock)
      })
    })
  }