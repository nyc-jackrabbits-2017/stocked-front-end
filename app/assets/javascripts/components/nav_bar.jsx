class NavBar extends React.Component {

  handleClick(e){
    e.preventDefault()

    $.ajax({
      url: "http://stocked-back.herokuapp.com/api/sessions/"+ window.localStorage.token,
      method: "DELETE"
    }).done(function(response){
      location.href = "/sessions/new"
    })
  }
  render() {
    return(
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/sessions/new">Register</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="" className="logout" onClick={this.handleClick.bind(this)}>Logout</a></li>
        </ul>
      </div>
    )
  }
}
