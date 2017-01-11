class Login extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;

    $.ajax({
       url: 'http://stocked-back.herokuapp.com/api/sessions',
       method: 'post',
       data: {
         session: {
           email: email.value,
           password: password.value
         }

       }
    }).done(function(token) {
      localStorage.setItem("token", token.auth_token)
      localStorage.setItem("user_id", token.id)
      // location.href = "http://stocked-front-end.herokuapp.com/profile"
      location.href = "/profile"
    }.bind(this))
  }

render() {
  return(
  <div className="container">
  <form onSubmit={this.handleSubmit.bind(this)} className="well form-horizontal" action=" " method="post"  id="contact_form">
    <fieldset>

    <legend>Login</legend>
    <br/>

      <div className="form-group">
        <label className="col-md-4 control-label">E-Mail</label>
          <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
             <input name="session[email]" placeholder="E-Mail Address" className="form-control"  type="email" ref="email"/>
          </div>
        </div>
      </div>
      <br/>

      <div className="form-group">
        <label className="col-md-4 control-label">Password</label>
          <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input name="session[password]" placeholder="Password" className="form-control"  type="password" ref="password"/>
          </div>
      </div>
      </div>
      <br/>

      <div className="form-group">
        <label className="col-md-4 control-label"></label>
        <div className="col-md-4">
          <button type="submit" className="btn btn-warning" >Login <span className="glyphicon glyphicon-log-in"></span></button>
        </div>
      </div>

    </fieldset>
  </form>
  </div>
   )
  }
}
