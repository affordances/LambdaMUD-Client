import React from 'react';
import Authenticate from './Authenticate';
import '../App.css';

class Game extends React.Component {
  render() {
    return (
      <div>
        GAME
      </div>
    );
  }
}

export default Authenticate(Game);
