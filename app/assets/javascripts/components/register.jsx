class Register extends React.Component {
  handleSubmit(event) {
        event.preventDefault();
        const email = this.refs.email;
        const password = this.refs.password;
}
  //   $.ajax({
  //      url: 'users/new',
  //      method: 'post',
  //      data: {
  //          user: {
  //            email: this.email.value,
                // password: this.password.value
  //          }
  //        }
  //   }).done(function(response) {
  //
  //   }.bind(this));
  // }

render() {
  return(
  <form onSubmit={this.handleSubmit} class="well form-horizontal" action=" " method="post"  id="contact_form">
    <fieldset>

    <legend>Create Account</legend>
    <br/>

      <div class="form-group">
        <label class="col-md-4 control-label">E-Mail</label>  
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
             <input name="email" placeholder="E-Mail Address" class="form-control"  type="email" ref="email"/>
          </div>
        </div>
      </div>
      <br/>
         
      <div class="form-group">
        <label class="col-md-4 control-label">Password</label>  
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input name="password" placeholder="Password" class="form-control"  type="password" ref="password"/>
          </div>
      </div>
      </div>
      <br/>

      <div class="form-group">
        <label class="col-md-4 control-label"></label>
        <div class="col-md-4">
          <button type="submit" class="btn btn-warning" >Create Account <span class="glyphicon glyphicon-log-in"></span></button>
        </div>
      </div>

    </fieldset>
  </form>
   )
  }
}
