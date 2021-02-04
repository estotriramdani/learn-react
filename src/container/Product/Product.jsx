import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="logo Etanee" />
          </div>
          <div className="troley">
            <img
              src="https://static.thenounproject.com/png/1138102-200.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
