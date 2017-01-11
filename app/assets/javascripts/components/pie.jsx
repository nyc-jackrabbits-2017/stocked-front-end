class Pie extends React.Component {
  constructor(){
    super()
    this.state = {
      data: {
        purchased_stocks: [],
        quantities: [],
        colors: [ "#fbb735", "#e98931", "#1f5ea8", "#b32E37", "#6c2a6a",
        "#5c4399", "#274389", "#eb403b", "#227FB0", "#2ab0c5",
        "#39c0b3"],
        labels: []
      }
    }
    this.addData = this.addData.bind(this)
  }

  componentDidMount() {
      $.ajax({
        url: "http://stocked-back.herokuapp.com/api/users/1/purchased_stocks",
        dataType: 'json',
        async: false
      })
      .done(this.addData)

      let ctx = document.getElementById(this.props.name).getContext("2d");

      let myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: this.state.data
      })
  }


  addData(response){
    // let labels = []
    // let quantities = []
    // let colors = [ "#fbb735", "#e98931", "#1f5ea8", "#b32E37", "#6c2a6a",
    // "#5c4399", "#274389", "#eb403b", "#227FB0", "#2ab0c5",
    // "#39c0b3"]

    // let stocks = response.purchased_stocks
    this.setState({data: { purchased_stocks: response.purchased_stocks }})
    debugger
      stocks.forEach(function(stock){
        // labels = labels.concat(stock.stock_symbol)
        // quantities = quantities.concat(stock.quantity)
        let singleStock = this.stock
        this.setState({
          data: {
            $push : this.singleStock.quantity
          }
        })
    })
    debugger

      // this.setState({
      //   data: {
      //     data: quantities,
      //     backgroundColor: colors,
      //     hoverBackgroundColor: colors
      //   }
      // })
  }


  render(){
    return(
      <div>
       <canvas id={this.props.name}></canvas>
      </div>
    )
  }
}
