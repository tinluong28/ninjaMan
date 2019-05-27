const direction = () => {
  xDir = ghost.x - ninjaman.x;
  yDir = ghost.y - ninjaman.y;
  leftMove = world[ghost.y][ghost.x - 1];
  rightMove = world[ghost.y][ghost.x + 1];
  topMove = world[ghost.y - 1][ghost.x];
  downMove = world[ghost.y + 1][ghost.x];
  surrounding = [rightMove, topMove, leftMove, downMove];
  movement = [];
  blankSpace = surrounding.map((sur, index) => {
    if (sur == 0) {
    }
  });

  if (xDir > 0) {
    while (world[ghost.y][ghost.x - 1] === 0) {
      ghost.x--;
    }
  }
  if ((world[ghost.y][ghost.x - 1] = 1)) {
  } else {
    ghost.x--;
  }
};
