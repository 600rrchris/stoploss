import React, { Component } from 'react'
import AddStock from './AddStock'
import createStock from '../utils/addStock'

class StocksParent extends Component {
    constructor() {
        super();
        this.state ={
            stocks: [],
        }
    }
    handleAddStock = async (state) => {
        console.log()
        const {user} = this.props
            const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({state:state, user})
            }    
           return await createStock(options).then(stock=>{
               this.setState({
                   stocks:[stock, ...this.state.stocks]
               })
           })
        }

    handledeleteStock = (stockIdx, user, _id) => {
        const options = {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({stockIdx: stockIdx, _id, user})
        }
        deleteStock(options).then(()=>{
            let newState = this.state.stocks.filter(s => {
                return s._id != _id
            })
            this.setState({
                stocks: [...newState]
            })
        })
    }

    componentDidMount(){
        const options = {
            method: 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(this.props.user)
        }

        getStocks(options).then(results => 
            this.setState({
                stocks: results
            })
        )
    }

    

    render() {

        return(
            <AddStock 
                user={this.props.user} 
                stocks={this.state.stocks}
                handledeleteStock={this.handledeleteStock}
                handleAddStock={this.handleAddStock}
            />
        )
    }

}
const BASE_URL='/api/stocks/'
async function getStocks(options){
    try{
        const fetchStocks = await fetch(BASE_URL + 'all', options)
        const data = await fetchStocks.json()
        return await data
    } catch(error) {
        console.log(error)
    }
}

async function deleteStock(options){
    try{
      const deletedStock = await fetch(BASE_URL + 'deleteStock', options)
      const data = await deletedStock.json()
      return await data
    } catch(error) {
      console.log(error)
    }
  }

export default StocksParent;