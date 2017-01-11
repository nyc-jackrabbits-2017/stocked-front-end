class Portfolio extends React.Component {
  render() {
    let quantity = 0;
    let purchase_price = 0;
    let cost_basis = 0;
    let profit_loss = 0;
    let percentage = 0;
    let TextColor
    for (var i = 0; i < this.props.stock.length; i++) {
      let total_current_price = (parseFloat(this.props.stock[i].last_trade_price) * this.props.stock[i].quantity)
      quantity += this.props.stock[i].quantity
      purchase_price += this.props.stock[i].cost_basis
      cost_basis += total_current_price
      profit_loss += total_current_price - this.props.stock[i].cost_basis
      percentage += (((total_current_price/(this.props.stock[i].cost_basis) -1)*100))
    }
    if (profit_loss > 0) {
      TextColor = "text-success"
    } else {
      TextColor = "text-danger"
    }
    return(
      <tr>
        <td><a href="/">DEF</a></td>
        <td>{quantity}</td>
        <td>$ {(purchase_price).toFixed(2)} </td>
        <td>$ {(cost_basis).toFixed(2)}</td>
        <td className={TextColor}>$ {(profit_loss.toFixed(2))}</td>
        <td className={TextColor}>{percentage.toFixed(4)} %</td>

      </tr>
    )
  }
}
