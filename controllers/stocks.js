const User = require('../models/user');

module.exports = {
    getAllStocks,
    deleteStock,
    createStock
  };



  function getAllStocks(req, res) {
    User.findById(req.body._id)
    .then(s=>{
        
        res.status(200).json(s.stocks)
    })
  }

  function deleteStock(req, res){
    const userId = req.body.user._id
    const stockId = req.body._id
    User.findById(userId)
    .then( s =>{
      const stock = s.stocks.id(stockId)
      s.stocks.remove(stock)
      console.log('stock')
      s.save(()=>{
        res.status(201).json(stock)
      })
    })
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