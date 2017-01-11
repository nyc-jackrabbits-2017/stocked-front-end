class PurchaseStock extends React.Component {

  handleSearch(e){
    e.preventDefault
    let searchText = $("#example-search-input").val()

    $.ajax({
      url: 'http://stocked-back.herokuapp.com/search/stocks/'+searchText,
      dataType: 'json'
    }).done(function(response) {
      $("#stock-ticker-input").val(searchText)
      $("#stock-price-input").val("$"+response.toFixed(2))
      $("#example-search-input").val("")
    })
  }

  handleSubmit(e){
    e.preventDefault
  }

  handleChange(e){
    let stockText = $("#stock-ticker-input").val()

    $.ajax({
      url: 'http://stocked-back.herokuapp.com/search/stocks/'+stockText,
      dataType: 'json'
    }).done(function(response) {
    total_price = $("#stock-quantity-input").val() * response
    $("#stock-price-input").val("$"+ total_price.toFixed(2))
  })
}

  render(){

    return(
    <div>
    <h2 className="sub-header">Purchase Stock</h2>
      <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
        <div className="form-group row">
          <form className="form-inline">
            <label className="col-2 col-form-label">Search Stock Tickers</label>
            <div className="col-10">
              <input className="form-control" type="search" id="example-search-input"/>
              <button type="submit" className="btn btn-success" onClick={this.handleSearch.bind(this)}>Search</button>
            </div>
          </form>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Stock Ticker</label>
          <div className="col-10">
            <input className="form-control" type="string" id="stock-ticker-input"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label">Quantity</label>
          <div className="col-10">
            <input className="form-control" type="integer" id="stock-quantity-input" onChange={this.handleChange.bind(this)}/>
          </div>
        </div>

        <div className="form-group row form-inline">
          <label className="col-2 col-form-label">Trading Price</label>
          <div className="col-10">
            <input className="form-control" type="integer" id="stock-price-input" placeholder="$20.00"/>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </div>  
        </div>        
      </div>

    <div className="col-xs-6 col-sm-8 col-md-8 col-lg-8">
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    )
  }
}
