import React, { Component } from 'react';
import { Link } from 'react-router';
import itemsData from '../../assets/data/items.json';
import './styles.sass';

class TradeRequest extends Component {
  getItemInfo(type) {
    return itemsData['items'].map((item) =>{
      if (item.id == this.props.itemId) {
        return item[type];
      }
    });
  }

  render() {
    return (
      <div className="trWrapper">
        <div className="upper">
          <h4>
          <p>{this.getItemInfo("bought")} people have ordered <Link>{this.getItemInfo("name")}</Link> from you.</p>
          </h4>
        </div>
        {/* <div className="tradeBtnWrapper lower">
          <button className="acceptBtn normalBtn">Accept</button>
          <button className="declineBtn normalBtn">Decline</button>
        </div> */}
      </div>
    );
  }
}

export default TradeRequest;
