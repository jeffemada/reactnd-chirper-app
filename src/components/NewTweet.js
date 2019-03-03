import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { haddleAddTWeet } from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(haddleAddTWeet(text, id));

    this.setState(() => ({
      text: '',
      toHome: id ? false : true
    }));
  };

  render() {
    const TWEET_MAX_LENGTH = 280;
    const { text, toHome } = this.state;
    const tweetLeft = TWEET_MAX_LENGTH - text.length;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={TWEET_MAX_LENGTH}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
