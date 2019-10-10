import React, { Component } from 'react'
import createStock from '../utils/addStock'
import Stock from '../components/Stocks/Stock'
import StockPost from '../components/StockPost'
class AddStock extends Component{

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
           return await createStock(options)
        }

    render(){
        

        return(
            <div>
            
                <div className="jumbotron">
                    <h3>Add {this.props.user.name}!</h3>
                </div>
                <Stock 
                    handleAddStock={this.handleAddStock}
                    history={this.props.history}
                    stocks={this.props.user.stocks}
                />
                <StockPost 
                user={ this.props.user }
                />
            </div>
            
        )
    }
}

export default AddStock;