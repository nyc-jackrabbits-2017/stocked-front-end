class Register extends React.Component {

  handleSubmit(event) {
        // event.preventDefault();
        // const email = this.refs.email;
        // const password = this.refs.password;
        // const password_conf = this.refs.password_confirmation

    $.ajax({
       url: 'http://stocked-back.herokuapp.com/api/users',
       method: 'post',
       data: $(event.target).serialize()
    }).done(function(token) {
      localStorage.setItem("token", token.auth_token)
      localStorage.setItem("user_id", token.id)
      location.href = "/profile"
    }.bind(this));
  }

render() {
  return(
  <div className="container">
  <form onSubmit={this.handleSubmit.bind(this)} className="well form-horizontal"  method="post"  id="contact_form">
    <fieldset>

    <legend>Create Account</legend>
    <br/>

      <div className="form-group">
        <label className="col-md-4 control-label">E-Mail</label>
          <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
             <input name="user[email]" placeholder="E-Mail Address" className="form-control"  type="email" ref="email"/>
          </div>
        </div>
      </div>
      <br/>

      <div className="form-group">
        <label className="col-md-4 control-label">Password</label>
          <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input name="user[password]" placeholder="Password" className="form-control"  type="password" ref="password"/>
          </div>
      </div>
      </div>
      <br/>

      <div className="form-group">
        <label className="col-md-4 control-label">Password Confirmation</label>
          <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input name="user[password_confirmation]" placeholder="Password" className="form-control"  type="password" ref="password_confirmation"/>
          </div>
      </div>
      </div>
      <br/>

      <div className="form-group">
        <label className="col-md-4 control-label"></label>
        <div className="col-md-4">
          <button type="submit" className="btn btn-warning" >Create Account <span className="glyphicon glyphicon-log-in"></span></button>
        </div>
      </div>

    </fieldset>
  </form>
      </div>
   )
  }
}
