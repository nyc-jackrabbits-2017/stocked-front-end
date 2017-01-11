class NavBar extends React.Component {

  handleClick(e){
    e.preventDefault()

    $.ajax({
      url: "http://stocked-back.herokuapp.com/api/sessions/"+ window.localStorage.token,
      type: "DELETE"
    }).done(function(response){
      location.href = "/sessions/new"
    })
  }

  render() {

    const logInNav = window.localStorage.user_id === '' ?
      <div>
        <li><a href="/users/new">Register</a></li>
        <li><a href="/sessions/new">Login</a></li>
      </div> :
      <div>
        <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
        <li><a href="" className="logout" onClick={this.handleClick.bind(this)}>Logout</a></li>
      </div>

    return(
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
        {logInNav}
        </ul>
      </div>
    )
  }
}
