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
    let usedPositions = [...this.state.usedPositions];
    if (!usedPositions.includes(position)) {
      usedPositions.push(position);
    }
    let initialText = ' ';
    this.setState({totalPrice, positions, usedPositions, initialText});
  };

  removeElement = (index) => {
    let usedPositions = [...this.state.usedPositions];
    let usedPosition = usedPositions[index];
    if (usedPosition.count > 1) {
      usedPosition.count--;
      let totalPrice = this.state.totalPrice - usedPosition.price;
      usedPositions[index] = usedPosition;
      this.setState({totalPrice, usedPositions});
    } else {
      usedPositions.splice(index, 1);
      let totalPrice = this.state.totalPrice - usedPosition.price;
      let initialText = 'Order is empty! Please add some items!';
      this.setState({totalPrice, usedPositions, initialText});
    }
  };

  render() {
    return (
        <div className="App">
          <h4 className="menuItem">Menu</h4>
          <div className="menu">
            {POSITIONS.map((pos, key) =>
                <Positions
                    key={key}
                    image={pos.image}
                    name={pos.name}
                    price={this.state.positions[key].price}
                    onClick={() => this.addElement(key)}
                />
            )}
          </div>
          <h4 className="menuItem">Order list</h4>
          <div className="orderWrap">
            <Order
                initialText = {this.state.initialText}
                usedPositions={this.state.usedPositions}
                total={this.state.totalPrice}
                remove={this.removeElement}
            />
          </div>
        </div>
    );
  }
}

export default App;
