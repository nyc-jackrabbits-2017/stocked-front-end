class StockTimeline extends React.Component {
  constructor(){
    super();
    this.state = {
      resources: []
    }
  }

  componentDidMount(){

  }

  render() {

    const stocks= [
      {
  			stocksymbol: "FB",
  			shares: 20,
  			purchased_price: 2370.2,
  			current_price: 2378.2,
        p_l: 8.0
  		},
      {
        stocksymbol: "GOOGL",
        shares: 10,
        purchased_price: 8290.9,
        current_price: 8313.12,
        p_l: 22.22
      },
      {
        stocksymbol: "AMZN",
        shares: 12,
        purchased_price: 9553.56,
        current_price: 9435.24,
        p_l: -118.32
      },
  	]

    return(
              <div>
                <PieCharts />
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
                      <Portfolio stock={stocks}/>
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
                      {stocks.map((stock, i) =>
                        <Stock stock={stock} key={i}/>
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
    )
  }
}
