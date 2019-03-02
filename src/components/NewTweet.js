import React, { Component } from 'react';
import { connect } from 'react-redux';
import { haddleAddTWeet } from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: ''
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
      text: ''
    }));
  };

  render() {
    const TWEET_MAX_LENGTH = 280;
    const { text } = this.state;
    const tweetLeft = TWEET_MAX_LENGTH - text.length;

    /**
     * TODO: Redirect to home view on submit
     */

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
