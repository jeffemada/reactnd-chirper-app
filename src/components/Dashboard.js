import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class DashBord extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestam)
  };
}

export default connect(mapStateToProps)(DashBord);
