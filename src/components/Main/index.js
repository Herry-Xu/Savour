import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import itemData from "../../assets/data/items.json"

class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <main className="main">
        {itemData['items'].map((item, i) => <Item itemId={item.id} key={item.id} />)}
      </main>
    );
  }
}

export default Homepage;
