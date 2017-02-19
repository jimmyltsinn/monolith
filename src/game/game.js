export let flipValid = (board, x, y) => {
  if (board[x][y] == 0) return undefined;
  let val = board[x][y];
  let ret = false;
  if (board[x + 0][y + 1] == val) ret = true;
  if (board[x + 0][y - 1] == val) ret = true;
  if (board[x + 1][y + 0] == val) ret = true;
  if (board[x - 1][y + 0] == val) ret = true;
  return ret;
};

export let flipAt = (board, x, y) => {
  if (!flipValid(board, x, y)) return undefined;

};
