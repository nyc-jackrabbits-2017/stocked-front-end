class Stock extends React.Component {
  constructor(){
    super();

    this.profitLoss = this.profitLoss.bind(this)
  }

        profitLoss(purchasedPrice, currentPrice) {
          if(purchasedPrice - currentPrice < 0){
            return "text-success"
          }else {
            return "text-danger"
          }
        }

    render() {
      let {stocksymbol, shares, purchased_price, current_price, p_l} = this.props.stock;

      return(
        <tr>
          <td>{stocksymbol}</td>
          <td>{shares}</td>
          <td>$ {purchased_price.toFixed(2)}</td>
          <td>$ {current_price.toFixed(2)}</td>
          <td className={""+this.profitLoss(purchased_price, current_price)+""}>$ {p_l.toFixed(2)}</td>
        </tr>
      )
    }
}
