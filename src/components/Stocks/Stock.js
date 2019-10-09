import React, { Component } from 'react'
import stock from '../../utils/alpha';



class Stock extends Component {
  constructor(){
    super();
    this.state = {
    stock: [
     {
      
      results:[],
      ticker:[],
      volume:[]
    }
    ],
    symbol: [''],
  }}
  


  
  updateNewTextValue = (event) => {
    this.setState({ symbol: event.target.value });
  }
  addNewSymbol = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    

    today =  yyyy + '-' +  mm +  '-' + dd;

  //   var now = new Date();
  //   var pretty = [
  //   now.getHours(),
  //   ':',
  //   now.getMinutes() - 1,
  //   ':',
  //   '00'
  // ].join('');


    stock(this.state.symbol).then(results => {
      console.log(results["Time Series (Daily)"][today]["1. open"])
      this.setState({
        stock: 
        [...this.state.stock, 
          {
          results: [results["Time Series (Daily)"][today]["4. close"] ],
          ticker: [results["Meta Data"]["2. Symbol"]],
          volume: [results["Time Series (Daily)"][today]["5. volume"] ]
        }
        ]
      })
    })
  }



  



stockTableRow = () => this.state.stock.map((s, i) => 
  <tr key={ i }>
    <td>
      { s.ticker }
    </td>
    <td>
      { s.results }
    </td>
    <td>
      { s.volume }
    </td>
    <td>
      <button> 
        Delete
      </button>
    </td>
  </tr>
  )

    render() {
      return(
       <div> <input className="form-control" value={ this.state.symbol } onChange={ this.updateNewTextValue }></input>
        <button className="btn btn-primary mt-1" onClick={ this.addNewSymbol }>ADD</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Symbol
                </th>
                <th>
                  Price
                </th>
                <th>
                  Volume
                </th>
                <th>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              { this.stockTableRow() }
            </tbody>
          </table>
        </div>
    </div>
    )
  }
}

export default Stock;