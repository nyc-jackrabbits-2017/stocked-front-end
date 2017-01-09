class StockInfo extends React.Component {
  render() {
    return(
      <div>
        <h2 className="sub-header">Facebook</h2>
        <ul className="list-group col-md-6" >
            <li className="list-group-item">$FB</li>
            <li className="list-group-item">Current Value: 125.22 USD</li>
            <li className="list-group-item">Current Value Portfolio: 1252.2 USD</li>
            <li className="list-group-item">Amount: 10</li>
            <li className="list-group-item">Price Purchased: 110.10 USD</li>
            <li className="list-group-item">Cost Base: 1101.0 USD</li>
            <li className="list-group-item">Price Purchased: 110.10 USD</li>
            <li className="list-group-item list-group-item-success">Profit: {1252.2-1101.0} USD</li>
        </ul>
      </div>
    )
  }
}
