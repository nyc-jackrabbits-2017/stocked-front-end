class PieCharts extends React.Component {
  render(){
    return(
      <div>
        <h1 className="page-header">Dashboard</h1>
        <div className="row placeholders">
          <div className="col-xs-6 col-sm-3 placeholder">
            <Pie name="Portfolio-Performance" />
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder">
            <Pie name="Portfolio2"/>
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder">
            <Pie name="Portfolio3"/>
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder">
            <Pie name="Portfolio4" />
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
        </div>
      </div>
    )
  }
}
