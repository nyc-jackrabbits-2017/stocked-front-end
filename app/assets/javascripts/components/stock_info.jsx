class StockInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      response: {}
    }
    this.getData = this.getData.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  componentDidMount() {
    let path = window.location.pathname
    $.ajax({
      url: "http://stocked-back.herokuapp.com/users/1/purchased_stocks/1",
      dataType: 'json'
    }).done(this.getData)
    setInterval(this.updateData, 3000)

  }

  getData(response){
    this.setState({
      response: response
    })
  }

  updateData(){
    $.ajax({
      url:"http://stocked-back.herokuapp.com/users/1/purchased_stocks/1",
      dataType: 'json'
    }).done(this.getData)
    console.log("hello")
  }

  render() {

    let{ company_name, cost_basis, last_trade_price, purchase_price, stock_symbol, quantity } = this.state.response

    let total_current_price = parseFloat(last_trade_price) * quantity

    let ProfitOrLossColor;
    let ProfitOrLoss;
    let Arrow;
    let ArrowColor
    if ((cost_basis - total_current_price) < 0) {
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
        <h2 className="sub-header">{company_name}</h2>
        <ul className="list-group col-md-6" >
            <li className="list-group-item">{stock_symbol}</li>
            <li className="list-group-item">Current Value: <strong className="pull-right">$ {last_trade_price}</strong></li>
            <li className="list-group-item">Current Value in Portfolio: <strong className="pull-right">$ {(total_current_price).toFixed(2)}</strong></li>
            <li className="list-group-item">Number of shares: <strong className="pull-right"> {quantity}</strong></li>
            <li className="list-group-item">Price Purchased: <strong className="pull-right">$ {purchase_price}</strong></li>
            <li className="list-group-item">Cost Base: <strong className="pull-right">$ {parseFloat(cost_basis).toFixed(2)}</strong></li>
            <li className={`list-group-item ${ProfitOrLossColor}`}>{ProfitOrLoss}: <strong className="pull-right">$ {(total_current_price - cost_basis).toFixed(2)}</strong></li>
        </ul>
        <h2 className="col-md-2">  </h2>
        <h3 className={ArrowColor}><span className={Arrow}></span> {(((total_current_price / cost_basis) - 1) * 100).toFixed(2)} %</h3>
      </div>
    )
  }
}
