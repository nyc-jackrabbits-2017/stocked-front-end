class Line extends React.Component {
  constructor(){
    super()
    this.state ={
      data: {}
    }
    this.addData = this.addData.bind(this)
  }
  componentDidMount(){
          $.ajax({
            url: "http://stocked-back.herokuapp.com/api/users/1/last_year_portfolio_performance",
            dataType: 'json',
            method: 'get'
          })
          .done(this.addData)
  }
  addData(response){
    // debugger;
    console.log('RUNNING addData')
    this.setState({
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
              {
                  label: "My First dataset",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: response,
                  spanGaps: false,
              }]
            }
          });
          let ctx = document.getElementById(this.props.name).getContext("2d");
          let myPieChart = new Chart(ctx, {

            type: 'line',
            data: this.state.data
          });
        }
  render(){
    return(
      <canvas id={this.props.name}></canvas>
      )
  }
}
