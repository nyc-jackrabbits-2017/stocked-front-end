class Pie extends React.Component {
  componentDidMount() {
    let labels = []
    let quantities = []
    let colors = [ "#fbb735", "#e98931", "#1f5ea8", "#b32E37", "#6c2a6a",
    "#5c4399", "#274389", "#eb403b", "#227FB0", "#2ab0c5",
    "#39c0b3"]

    $.ajax({
      url: "http://stocked-back.herokuapp.com/users/1/purchased_stocks",
      dataType: 'json',
      async: false
    })
    .done(function(response){
      let stocks = response.purchased_stocks
      stocks.forEach(function(stock){
        labels = labels.concat(stock.stock_symbol)
        quantity = quantities.concat(stock.quantity)
      })
    })

    const data = {
      tickers: labels,
      data: [
      {  data: quantities,
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
  };
  let ctx = document.getElementById(this.props.name).getContext("2d");
  let myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
  });
}

  render(){
    return(

      <div>
        <p>heyhey!</p>
        <canvas id={this.props.name}></canvas>
      </div>
    )
  }
}
