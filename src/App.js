//feature

import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      sort: "",
    }; 
  }

  sortProduct(event){

  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shoping Cart </a>
        </header> 

        <main>
          <div className="content">
            <div className="main">
<Filter count={this.state.products.length}>

sort ={this.state.sort }
filterProducts={this.filterProducts}


</Filter>
              <Products products={this.state.products}></Products>

            </div>

            <div className="sidebar">Cart Items</div>
          </div>
        </main>

        <footer>Alright is preserverd!</footer>
      </div>
    );
  }
}

export default App;
