import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Grocery = (props) => (
  <tr>
    <td>{props.grocery.name}</td>
    <td>{props.grocery.quantity}</td>

    <td>
      <Link to={"/edit/" + props.grocery._id}>
        <button className="btn btn-secondary btn-sm">EDIT</button>
      </Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteItem(props.grocery._id);
        }}
      >
        <button className="btn btn-danger btn-sm">DELETE</button>
      </a>
    </td>
  </tr>
);

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/groceries/")
      .then((response) => {
        this.setState({ groceries: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteItem = (id) => {
    axios.delete("http://localhost:5000/groceries/" + id).then((res) => {
      console.log(res.data);
    });
    this.setState({
      groceries: this.state.groceries.filter((el) => el._id !== id),
    });
  };
  groceryList() {
    return this.state.groceries.map((thisgrocery) => {
      return (
        <Grocery
          grocery={thisgrocery}
          deleteItem={this.deleteItem}
          key={thisgrocery._id}
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3>items in your list</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.groceryList()}</tbody>
        </table>
        <Link to="/add" className="btn  btn-primary">
          Add
        </Link>
      </div>
    );
  }
}

export default GroceryList;
