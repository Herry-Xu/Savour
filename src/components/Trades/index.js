import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import TradeRequest from '../TradeRequest/index';
import ProposedTrade from '../ProposedTrade/index';
import AddItemPage from '../AddItemPage/index';
import userData from "./../../assets/data/users.json"
import './styles.sass';

class Trades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentDidMount() {
    var userSession = sessionStorage.getItem("userId");
    if (!userSession) {
      console.log("no user session");
      browserHistory.push('login');
    }
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  closeModal() {
    this.setState({ modalOpened: false });
    document.body.classList.remove('modal-opened');
    document.body.style.marginRight = 0;
  }

  getAllProposedTrades() {
    var self = this;
    const list = userData.users.map(function (user, i){
      if(user.id == sessionStorage.getItem("userId")) {
        return user.buy_items.map((itemId) => <ProposedTrade itemId={itemId} />);
      }
    });
    console.log("list" + list);
    return (list);
  }

  getAllTradeRequests() {
    var self = this;
    const list = userData.users.map(function (user, i){
      if(user.id == sessionStorage.getItem("userId")) {
        return user.sell_items.map((itemId) => <TradeRequest itemId={itemId} />);
      }
    });
    console.log("list" + list);
    return (list);
  }

  getModal() {
    if (this.state.modalOpened) {
      return <AddItemPage key="modal" openClass="open" close={this.closeModal.bind(this)} />;
    } else {
      return;
    }
  }

  openModal() {
    const scrollBar = document.querySelector('.scrollbar-measure');
    const scrollBarWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
    document.body.classList.add('modal-opened');
    document.body.style.marginRight = `${scrollBarWidth}px`;
    this.setState({ modalOpened: true });
  }

  render() {
    return (
      <div className="tradesWrapper">
        {this.getModal()}
        <div className="addTradeWrapper">
          <Link to="myItems"><button className="tradeBtn allItemsBtn">My Items</button></Link>
          <button
            onClick={() => {
              this.openModal();
            }}
            className="tradeBtn addItemBtn">
            + Add Item
          </button>
        </div>
        <div className="tradesInfoWrapper">
          <div className="tradeReqWrapper">
            <h3 className="unCap">Trade Requests</h3>
            <div className="allTradeRequestsWrapper">
              {this.getAllTradeRequests()}
            </div>
          </div>
          <div className="tradeProposedWrapper">
            <h3 className="unCap">Trades Proposed</h3>
            <div className="allProposedTradesWrapper">
              {this.getAllProposedTrades()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trades;
