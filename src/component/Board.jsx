import React from 'react';

import Cell from './Cell';

import fetch from '../game/fetchBoard';

import config from '../game/config';
import * as Game from '../game/game';

const style = {
  table: {
    disply: 'table',
    borderSpacing: '4px'
  },
  row: {
    display: 'table-row'
  }
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: (new Array(config.height)).fill((new Array(config.width)).fill(0))
    };

    fetch('board')
      .then(board => this.setState({board}));
  }

  render() {
    let board = [];
    for (let i = 0; i < config.height; ++i) {
      let line = [];
      for (let j = 0; j < config.width; ++j) {
        line.push(<Cell
          key={`${i}-${j}`}
          value={this.state.board[i][j]}
          hitable={Game.hitValid(this.state.board, i, j)}
          onClick={() => this.setState(Game.hitAt(this.state.board, i, j))} />
        );
      }
      board.push(<div style={style.row} key={`row-${i}`}>{line}</div>);
    }
    return (
      <div>
        <div style={style.table}>{board}</div>
        <div>Cell left: {Game.cellLeft(this.state.board)}</div>
      </div>
    );
  }
}

export default Board;
