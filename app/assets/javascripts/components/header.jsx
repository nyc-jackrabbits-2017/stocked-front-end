class Header extends React.Component {

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
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/users/new">Register</a></li>
        <li><a href="/sessions/new">Login</a></li>
      </ul> :
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
        <li><a href="" className="logout" onClick={this.handleClick.bind(this)}>Logout</a></li>
      </ul>

    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Stocked</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            {logInNav}
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..."/>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
