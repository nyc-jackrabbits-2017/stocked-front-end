class Pie extends React.Component {
  componentDidMount() {
    const data = {
    labels: [
        "FB",
        "GOOGL",
        "AMZN"
    ],
    datasets: [
        {
            data: [20, 10, 12],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
    let ctx = document.getElementById(this.props.name).getContext("2d");

    let myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: data
    });
  }

  render() {

    return(
      <canvas id={this.props.name}>
      </canvas>
    )

  }
}
