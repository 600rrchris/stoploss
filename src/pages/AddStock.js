import React, { Component } from 'react'
import Stock from '../components/Stocks/Stock'
import StockPost from '../components/StockPost'


class AddStock extends Component{
        

    // handleAddStock = async (state) => {
    //     console.log()
    //     const {user} = this.props
    //         const options = {
    //             method: 'POST',
    //             headers : {
    //                 "content-type" : "application/json"
    //             },
    //             body: JSON.stringify({state:state, user})
    //         }    
    //        return await createStock(options)
    //     }

    

    render(){
        
        const list = this.props.stocks ?
         this.props.stocks.map((stock, idx) => {
            return (

                <StockPost 
                {...stock}
                key={idx}
                user={ this.props.user }
                stocks={this.props.stocks}
                handledeleteStock={this.props.handledeleteStock}
                />

            )

        })
        :
        "loading..."

        let show = list.length > 0 ? list : "Let's Make Some Mula"

        return(
            <div>
            
                <div className="jumbotron">
                    <h3>Add {this.props.user.name}!</h3>
                </div>
                <Stock 
                    handleAddStock={this.props.handleAddStock}
                    history={this.props.history}
                    stocks={this.props.stocks}
                    handledeleteStock={this.handledeleteStock}
                    />
                    {show}
            </div>
            
        )
    }
}

export default AddStock;