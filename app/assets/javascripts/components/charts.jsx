class Charts extends React.Component {
  render(){
    return(
      <div>
        <h1 className="page-header">Dashboard</h1>
        <div className="row placeholders">
          <div className="col-xs-4 col-sm-4 placeholder">
            <Pie name="PortfolioShares" />
            <h4>Portfolio Shares</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-xs-8 col-sm-8 placeholder">
            <Line name="PortfolioHistory"/>
            <h4>Portfolio History</h4>
            <span className="text-muted">Something else</span>
          </div>
        </div>
      </div>
    )
  }
}
