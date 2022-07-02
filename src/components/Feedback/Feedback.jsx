import { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <div className="Feedback">
        <div className="Feedback__controls">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div className="Statistics">
          <h2>Statistics</h2>
          <span>Good:</span>
          <span>Neutral:</span>
          <span>Bad:</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
