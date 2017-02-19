import fetch from 'isomorphic-fetch';

let parseBoard = f => {
  let board = [];
  let line = [];
  for (let ch of f) {
    if (ch == '\n') {
      board.push(line);
      line = [];
      continue;
    }
    if (ch == ' ') continue;
    line.push(parseInt(ch));
  }
  return board;
};

export let fetchFile = (url) => {
  return fetch(url)
    .then(res => res.text())
    .then(data => parseBoard(data));
};

export default fetchFile;
