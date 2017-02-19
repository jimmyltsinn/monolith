import React from 'react';

import Cell from './Cell';

import fetch from '../game/fetchBoard';

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
      board: (new Array(11)).fill((new Array(22)).fill(0))
    };

    fetch('board')
      .then(board => this.setState({board}));
  }

  render() {
    let board = [];
    for (let i = 0; i < 11; ++i) {
      let line = [];
      for (let j = 0; j < 22; ++j) {
        line.push(<Cell key={`${i}-${j}`} value={this.state.board[i][j]} />);
      }
      board.push(<div style={style.row} key={`row-${i}`}>{line}</div>);
    }
    return <div style={style.table}>{board}</div>;
  }
}

export default Board;
