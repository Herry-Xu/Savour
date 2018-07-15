import React, { Component } from 'react';
import { Link } from 'react-router';
import itemsData from '../../assets/data/items.json';
import './styles.sass';

class ProposedTrade extends Component {

  getItemInfo(type) {
    return itemsData['items'].map((item) =>{
      if (item.id == this.props.itemId) {
        return item[type];
      }
    });
  }

  render() {
    return (
      <div className="ptWrapper">
        <div className="upper">
          <img className="userImg" src={this.getItemInfo("picture")} />
          <h4>
          <p>You have ordered <Link>{this.getItemInfo("name")}</Link></p>
          </h4>
        </div>
        <div className="tradeBtnWrapper lower">
          <button className="cancelBtn normalBtn">Cancel Order</button>
        </div>
      </div>
    );
  }
}

export default ProposedTrade;
