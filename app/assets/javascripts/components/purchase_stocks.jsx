class PurchaseStock extends React.Component {
  render(){

    return(
    <div>
    <h2 className="sub-header">Purchase Stock</h2>
      <div className="form-group row">
        <label for="example-search-input" className="col-2 col-form-label">Search</label>
        <div className="col-10">
          <div className="col-6">
          <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
          </div>
          <div className="col-6">
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>

      </div>
      <div className="form-group row">
        <label for="example-email-input" className="col-2 col-form-label">Email</label>
        <div className="col-10">
          <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-url-input" className="col-2 col-form-label">URL</label>
        <div className="col-10">
          <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input" />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
        <div className="col-10">
          <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-password-input" className="col-2 col-form-label">Password</label>
        <div className="col-10">
          <input className="form-control" type="password" value="hunter2" id="example-password-input" />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-number-input" className="col-2 col-form-label">Number</label>
        <div className="col-10">
          <input className="form-control" type="number" value="42" id="example-number-input" />
        </div>
      </div>
    </div>
    )
  }
}
