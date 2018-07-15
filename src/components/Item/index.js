import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import data from '../../assets/data/items.json';

import './styles.sass';

class Item extends Component {

  constructor(props) {
    super(props);

    console.log(props);

    console.log(data);

    let thisItem = data.items.find(function(item) {
      return parseInt(item.id) == parseInt(props.itemId);
    })

    this.state = {
      id: this.props.itemId,
      item: thisItem
    }
  }

  render() {

    window.state = this.state;

    let picUrl = this.state.item.picture;

    return(
      <div className="item">
        <div className="content" id={this.state.id} onClick={()=>{
          browserHistory.push('/item/123');
        }} >
          <img src={picUrl}></img>
        </div>
        <p>{this.state.item.name} - ${this.state.item.price}</p>
      </div>
    );
  }

  componentDidMount() {
    // let doc = document.getElementById(this.state.id);
    // console.log(doc);

    // doc.style.backgroundImage = `url(${this.state.item.picture})`;

    // let imgRoute = "../../assets/images/pumpkinpie.jpg";
  }
}

export default Item;
