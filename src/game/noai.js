import config from  './config';
import * as game from './game';

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export let randomTry = (board, trialCnt) => {
  let retSeq, retBoard, minLeft = 256;

  for (let i = 0; i < trialCnt; ++i) {
    let seq = [];
    let currentBoard = board.slice();
    while (!game.gameEnd(currentBoard)) {
      const x = getRandom(0, config.width - 1);
      const y = getRandom(0, config.height - 1);
      const ret = game.hitAt(currentBoard, y, x);
      if (ret) {
        currentBoard = ret;
        seq.push({x, y});
      }
    }
    const left = game.cellLeft(currentBoard);
    if (left < minLeft) {
      minLeft = left;
      retSeq = seq;
      retBoard = board;
    }
  }

  return {
    seq: retSeq,
    board: retBoard,
    left: minLeft
  };
};
