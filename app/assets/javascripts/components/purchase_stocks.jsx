class PurchaseStock extends React.Component {

  handleSearch(e){
    e.preventDefault
    let searchText = $("#example-search-input").val()

    $.ajax({
      url: 'http://stocked-back.herokuapp.com/search/stocks/'+searchText,
      dataType: 'json'
    }).done(function(response) {
      $("#stock-ticker-input").val(searchText)
      $("#stock-price-input").val(response)
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
    $("#stock-price-input").val(total_price)
  })
}

  render(){

    return(
    <div>
    <h2 className="sub-header">Purchase Stock</h2>

      <div className="form-group row">
        <label className="col-2 col-form-label">Search Stock Tickers</label>
        <div className="col-10">
          <input className="form-control" type="search" id="example-search-input"/>
        </div>
          <button type="submit" class="btn btn-primary" onClick={this.handleSearch.bind(this)}>Submit</button>
      </div>

    <form>
      <div className="form-group row">
        <label className="col-2 col-form-label">Stock</label>
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
      <div className="form-group row">
        <label className="col-2 col-form-label">Trading Price</label>
        <div className="col-10">
          <input className="form-control" type="integer" id="stock-price-input"/>
        </div>
      </div>
        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
    </form>
    </div>
    )
  }
}
