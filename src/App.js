import React, {Component} from 'react';
import Menu from "./Components/Menu/Menu";
import Order from "./Components/Order/Order";

import hamburger from "./Components/Images/hamburger.png";
import cheeseburger from "./Components/Images/cheeseburger.png";
import fries from "./Components/Images/fries.png";
import coffee from "./Components/Images/coffee.png";
import tea from "./Components/Images/tea.png";
import cola from "./Components/Images/cola.png";

import './App.css';


const Items = [
  {name: 'Hamburger', image: hamburger},
  {name: 'Cheeseburger', image: cheeseburger},
  {name: 'Fries', image: fries},
  {name: 'Coffee', image: coffee},
  {name: 'Tea', image: tea},
  {name: 'Cola', image: cola}
];

class App extends Component {
  state = {

    items: [
      {name: 'Hamburger', count: 0, price: 110},
      {name: 'Cheeseburger', count: 0, price: 120},
      {name: 'Fries', count: 0, price: 45},
      {name: 'Coffee', count: 0, price: 70},
      {name: 'Tea', count: 0, price: 20},
      {name: 'Cola', count: 0, price: 35}
    ],
    text: 'Order is empty! Please add some items!',
    totalPrice: 0,
    requestedItems: []
  };

  addItem = index => {
    let items = [...this.state.items];
    let item = items[index];
    item.count++;
    let totalPrice = this.state.totalPrice + item.price;
    items[index] = item;
    let requestedItems = [...this.state.requestedItems];
    if (!requestedItems.includes(item)) {
      requestedItems.push(item);
    }
    let text = ' ';
    this.setState({totalPrice, items, requestedItems, text});
  };

  removeItem = () => {

  }



  render() {
    return (
        <div className="App">
          <div className="box box1">
            <span className="title">Add items</span>
            <div className="menu">
            {Items.map((pos, key) =>
                <Menu
                    key={key}
                    image={pos.image}
                    name={pos.name}
                    price={this.state.items[key].price}
                    onClick={() => this.addItem(key)}
                />
            )}
            </div>
          </div>
          <div className="box box2">
            <span className="title">Order details</span>
            <div className="order">
              <Order
                text = {this.state.text}
                requestedItems={this.state.requestedItems}
                totalPrice={this.state.totalPrice}
                remove={this.removeItem}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
