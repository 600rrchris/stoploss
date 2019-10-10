const User = require('../models/user');

module.exports = {
    getAllStocks,
    deleteStock,
    createStock
  };



  function getAllStocks(req, res) {
    Stock.find({})
    .then((stocks) => {
        res.status(200).json(stocks);
    })
    .catch((err) => console.log(err));

  }

  function deleteStock(req, res) {
    console.log(res)
  }



  function createStock(req, res) {
    let id = req.body.user._id
    let ticker = req.body.state.results
    let price = req.body.state.results
    let volume = req.body.state.volume
    let k = req.body.user.stocks
    // console.log(k)
    User.findById(id)
    .then( s => {
      let obj = {
        ticker,
        price,
        volume,
      }
      console.log(obj);
      s.stocks.push(obj)
      s.save(()=> {
        res.status(201).json(obj)
        // console.log(s.stocks)
      })
    })
  }

  // function createStock(req, res) {
  //   console.log(req.body);
  //   const stock = new stock(req.body);
  //   stock.save(function() {
  //     res.status(201).json(stock);
  //   });
  // }