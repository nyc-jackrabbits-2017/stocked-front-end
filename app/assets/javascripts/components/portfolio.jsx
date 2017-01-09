class Portfolio extends React.Component {

  render() {
    let shares = 0;
    let purchased_price = 0;
    let current_price = 0;
    let profit_loss = 0;
    let percentage = 0;
    let TextColor
    for (var i = 0; i < this.props.stock.length; i++) {
      shares += this.props.stock[i].shares
      purchased_price += this.props.stock[i].purchased_price
      current_price += this.props.stock[i].current_price
      profit_loss += this.props.stock[i].p_l
      percentage += (((this.props.stock[i].current_price/this.props.stock[i].purchased_price) -1)*100)
    }
    if (profit_loss > 0) {
      TextColor = "text-success"
    } else {
      TextColor = "text-danger"
    }
    return(
      <tr>
        <td><a href="/">DEF</a></td>
        <td>{shares}</td>
        <td>$ {(purchased_price).toFixed(2)} </td>
        <td>$ {(current_price).toFixed(2)}</td>
        <td className={TextColor}>$ {(profit_loss.toFixed(2))}</td>
        <td className={TextColor}>{percentage.toFixed(4)} %</td>

      </tr>
    )
  }
}
