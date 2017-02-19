import * as _ from 'lodash';
import config from  './config';

export let gameEnd = (board) => {
  for (let i = 0; i < config.height; ++i)
    for (let j = 0; j < config.width; ++j)
      if (hitValid(board, i, j)) return false;
  return true;
};

export let hitValid = (board, y, x) => {
  if (board[y][x] == 0) return undefined;
  let val = board[y][x];
  if (board[y + 0] && board[y + 0][x + 1] && board[y + 0][x + 1] == val) return true;
  if (board[y + 0] && board[y + 0][x - 1] && board[y + 0][x - 1] == val) return true;
  if (board[y + 1] && board[y + 1][x + 0] && board[y + 1][x + 0] == val) return true;
  if (board[y - 1] && board[y - 1][x + 0] && board[y - 1][x + 0] == val) return true;
  return false;
};

export let hitAt = (inBoard, y, x) => {
  let board = inBoard.slice();

  if (!hitValid(board, y, x)) return null;
  let vec = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let val = board[y][x];
  let l = [{x, y}];

  let updateList = [];

  while (l.length > 0) {
    let newl = [];

    for (let pos of l) {
      if (board[pos.y][pos.x] == 0) continue;
      board[pos.y][pos.x] = 0;
      updateList.push(pos);
      for (let v of vec) {
        let newPos = {x: pos.x + v[0], y: pos.y + v[1]};
        if (newPos.x < 0 || newPos.x >= config.width) continue;
        if (newPos.y < 0 || newPos.y >= config.height) continue;
        if (board[newPos.y][newPos.x] == val)
          newl.push(newPos);
      }
    }
    l = newl;
  }

  updateList = [].concat(...updateList.map(pos => vec.map(v => ({x: pos.x + v[0], y: pos.y + v[1]}))))
      .filter(pos => pos.x >= 0 && pos.x < config.width && pos.y >= 0 && pos.y < config.height)
      .filter(pos => board[pos.y][pos.x] != 0);

  updateList = _.uniqWith(updateList, (a, b) => a.x == b.x && a.y == b.y);

  for (let pos of updateList) {
    board[pos.y][pos.x]++;
    if (board[pos.y][pos.x] > config.type) board[pos.y][pos.x] = 1;
  }

  return board;
};

export let cellLeft = board => {
  return [].concat(...board).filter(i => i != 0).length;
};
