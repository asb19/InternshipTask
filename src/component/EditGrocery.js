import React, { Component } from "react";
import axios from "axios";

class EditGrocery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      quantity: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/groceries/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          quantity: response.data.quantity,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    axios
      .post(
        "http://localhost:5000/groceries/update/" + this.props.match.params.id,
        grocery
      )
      .then((res) => {
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
        <h2>Edit grocery</h2>
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
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditGrocery;
