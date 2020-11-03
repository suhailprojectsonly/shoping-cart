import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count}Products</div>
        <div className="filter-sort">
          Order{" "}
          <select>
            <option>Latest</option>
            <option value="lowest">Low Price</option>
            <option value="highest">High Price</option>
          </select>
        </div>
      </div>
    );
  }
}
