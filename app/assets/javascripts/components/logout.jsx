class Logout extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    }

    // $.ajax({
    //    url: 'sessions/:id',
    //    method: 'delete',
    //    data: {
    //      authenticity_token: Functions.getMetaContent("csrf-token")
    //    }
    // }).done(function() {
    //
    // });

  render() {
    return (
         <a href="#" onClick={this._signOut}>Sign out</a>
       )
    }
}
