class StockInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      response: {
        symbol: "$FB",
        full_name: "Facebook inc.",
        current_value: 1252.2,
        amount_shares: 10,
        cost_basis: 1101.0
      }
    }

    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    let path = window.location.pathname
    $.ajax({
      url: path+".json"
    })
    .done(this.getData)

  }

  getData(response){
    this.setState = {
      response: response
    }

    console.log("Hello")
  }


  render() {

    let ProfitOrLossColor;
    let ProfitOrLoss;
    let Arrow;
    let ArrowColor
    if ((this.state.response.current_value - this.state.response.cost_basis) > 0) {
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
            <li className="list-group-item">{this.state.response.symbol}</li>
            <li className="list-group-item">Current Value: <strong className="pull-right">$ {(this.state.response.current_value / this.state.response.amount_shares).toFixed(2)}</strong></li>
            <li className="list-group-item">Current Value in Portfolio: <strong className="pull-right">$ {(this.state.response.current_value).toFixed(2)}</strong></li>
            <li className="list-group-item">Number of shares: <strong className="pull-right"> {(this.state.response.amount_shares)}</strong></li>
            <li className="list-group-item">Price Purchased: <strong className="pull-right">$ {(this.state.response.cost_basis / this.state.response.amount_shares).toFixed(2)}</strong></li>
            <li className="list-group-item">Cost Base: <strong className="pull-right">$ {this.state.response.cost_basis.toFixed(2)}</strong></li>
            <li className={`list-group-item ${ProfitOrLossColor}`}>{ProfitOrLoss}: <strong className="pull-right">$ {(this.state.response.current_value - this.state.response.cost_basis).toFixed(2)}</strong></li>
        </ul>
        <h2 className="col-md-2">  </h2>
        <h3 className={ArrowColor}><span className={Arrow}></span> {(((this.state.response.current_value / this.state.response.cost_basis) - 1) * 100).toFixed(2)} %</h3>



      </div>
    )
  }
}
