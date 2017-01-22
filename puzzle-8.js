function repeatDown(total) {
  var count = 0;
  while (count < 8) {
    down();
    count = count +1;
  }
}
function repeatRight(total) {
  var count = 0;
  while (count < 2) {
    right();
    count = count +1;
  }
}
function repeatUp(total) {
  var count = 0;
  while (count < 7) {
    up();
    count = count +1;
  } 
}
repeatDown(8);
repeatRight(2);
repeatUp(7);
repeatRight(2);
repeatDown(8);
repeatRight(2);
repeatUp(7);
repeatRight(2);
repeatUp(7);
repeatRight(2);
repeatDown(8);
right();
