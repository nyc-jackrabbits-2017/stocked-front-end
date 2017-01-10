class StockTimeline extends React.Component {
  constructor(){
    super();
    this.state = {
      stocks: []
    }

    this.updateData = this.updateData.bind(this)
    this.getData = this.getData.bind(this)
  }
  componentDidMount(){
    $.ajax({
      url: 'http://stocked-back.herokuapp.com/users/1/purchased_stocks',
      dataType: 'json'
    }).done(this.getData)
    setInterval(this.updateData, 3000)
  }

  getData(response){

    this.setState({
      stocks: response.purchased_stocks
    })
  }

  updateData(){
    $.ajax({
      url:"http://stocked-back.herokuapp.com/users/1/purchased_stocks",
      dataType: 'json'
    }).done(this.getData)
  }

  render() {
    return(
              <div>
                <h2 className="sub-header">Portfolio Performance</h2>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Portfolio Cat.</th>
                        <th>Shares </th>
                        <th>Purchased Price</th>
                        <th>Current Price</th>
                        <th>P & L</th>
                        <th> % </th>
                      </tr>
                    </thead>
                    <tbody>
                      {<Portfolio stock={this.state.stocks}/>}
                    </tbody>
                  </table>
                </div>
                <h2 className="sub-header">Stock Positions</h2>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Stock Symbol</th>
                        <th>Shares </th>
                        <th>Purchased Price</th>
                        <th>Current Price</th>
                        <th>P & L</th>
                        <th> % </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.stocks.map((stock, i) =>
                        <Stock stock={stock} key={i}/>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
    )
  }
}
