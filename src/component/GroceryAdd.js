import React, { Component } from "react";
import axios from "axios";

class GroceryAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      quantity: "",
      baseurl: "http://localhost:5000/add",
    };
  }

  nameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  quantityHandler = (e) => {
    this.setState({ quantity: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const grocery = {
      name: this.state.name,
      quantity: this.state.quantity,
    };
    console.log(grocery);
    axios.post("http://localhost:5000/groceries/add", grocery).then((res) => {
      console.log(res.data);
    });
    this.setState({
      name: "",
      quantity: "",
    });
    window.location = "/";
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>Add grocery</h2>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={this.state.name}
                onChange={this.nameHandler}
              />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                className="form-control"
                type="number"
                value={this.state.quantity}
                onChange={this.quantityHandler}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GroceryAdd;
