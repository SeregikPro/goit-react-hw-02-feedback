import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>
        <Feedback />
      </div>
    );
  }
}
