class Stock extends React.Component {
  constructor(){
    super();

    this.profitLoss = this.profitLoss.bind(this)
  }

        profitLoss(currentPrice, purchasedPrice) {
          if(currentPrice - purchasedPrice < 0){
            return "text-success"
          }else {
            return "text-danger"
          }
        }

    render() {

      let { stock_symbol, quantity, purchase_price, cost_basis, ask, last_trade_price } = this.props.stock
      let total_current_price = (parseFloat(last_trade_price) * quantity)
      return(
        <tr>
          <td><a href="/stocks/1">{stock_symbol}</a></td>
          <td>{quantity}</td>
          <td>$ {cost_basis.toFixed(2)}</td>
          <td>$ {total_current_price.toFixed(2)}</td>
          <td className={""+this.profitLoss(cost_basis, total_current_price)+""}>$ {(total_current_price - cost_basis).toFixed(2)}</td>
          <td className={""+this.profitLoss(cost_basis, total_current_price)+""}>{(((total_current_price/cost_basis)-1)*100).toFixed(4)} %</td>
        </tr>
      )
    }
}
