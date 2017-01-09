class NavBar extends React.Component {
  render() {
    return(
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    )
  }
}
