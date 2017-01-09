class StockInfo extends React.Component {
  render() {
    const response = {
  symbol: "$FB",
  full_name: "Facebook inc.",
  current_value: 1252.2,
  amount_shares: 10,
  cost_basis: 1301.0
}
    let ProfitOrLossColor;
    let ProfitOrLoss;
    let Arrow;
    let ArrowColor
    if ((response.current_value - response.cost_basis) > 0) {
      ProfitOrLossColor = "list-group-item-success",
      ProfitOrLoss = "Profit",
      Arrow = "glyphicon glyphicon-arrow-up",
      ArrowColor = "text-success"

    } else {
      ProfitOrLossColor = "list-group-item-danger",
      ProfitOrLoss = "Loss",
      Arrow = "glyphicon glyphicon-arrow-down",
      ArrowColor = "text-danger"
    }
    return(
      <div>
        <h2 className="sub-header">Facebook</h2>
        <ul className="list-group col-md-6" >
            <li className="list-group-item">{response.symbol}</li>
            <li className="list-group-item">Current Value: {response.current_value / response.amount_shares} USD</li>
            <li className="list-group-item">Current Value in Portfolio: {response.current_value} USD</li>
            <li className="list-group-item">Number of shares: {response.amount_shares}</li>
            <li className="list-group-item">Price Purchased: {response.cost_basis / response.amount_shares} USD</li>
            <li className="list-group-item">Cost Base: {response.cost_basis} USD</li>
            <li className={`list-group-item ${ProfitOrLossColor}`}>{ProfitOrLoss}: {(response.current_value - response.cost_basis).toFixed(2)} USD</li>
        </ul>
        <h2 className="col-md-2">  </h2>
        <h3 className={ArrowColor}><span className={Arrow}></span> {(((response.current_value / response.cost_basis) - 1) * 100).toFixed(2)} %</h3>



      </div>
    )
  }
}
