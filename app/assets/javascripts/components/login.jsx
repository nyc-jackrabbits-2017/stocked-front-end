class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    console.log(email.value)
    console.log(password.value)
    }

  //   $.ajax({
  //      url: 'sessions/new',
  //      method: 'post',

  //      data: {
  //            email.value
  //        }

  //   }).done(function(response) {

  //   }.bind(this));
  // }

render() {
  return(
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email" ref="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" ref="password"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
   </form>
   )
  }
}
