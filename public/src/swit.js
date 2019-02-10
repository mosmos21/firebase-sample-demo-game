'use strict';
import cloudStorage from './cloud_storage.js';
import board from './board.js';

const swit = (VAL, ME) => {
  const YOU = (ME === 'p1') ? 'p2' : 'p1';
  const progress = ~~(Math.random() * 4) * (ME == 'p1' ? 1 : -1);
  const pos = (VAL[ME] + progress) < 1 ? 1 : (VAL[ME] + progress) > 16 ? 16 : (VAL[ME] + progress);

  // update display
  board.resetCellColorAll();
  board.setCellColor(VAL[YOU], (YOU === 'p1') ? 'red' : 'green');
  board.setCellColor(VAL[ME], (ME === 'p1') ? 'red' : 'green');

  // check winner
  if (VAL['p1'] < VAL['p2']) {
    board.setConsoleMessage((ME === VAL['turn']) ? 'Your Turn' : "Opponent's Turn");
  } else {
    board.setConsoleMessage(
      (VAL['turn'] === ME) ? 'You LOSE...' : 'YOU WIN!!!',
      (VAL['turn'] === ME) ? 'blue' : 'red');
  }
  
  // button down -> update DB
  document.querySelector('#btn').addEventListener('click', e => {
    if (ME === VAL['turn'] && (VAL['p1'] < VAL['p2'])) {
      VAL[ME] = pos;
      VAL['turn'] = YOU;
      cloudStorage.setGameData(VAL);
    }
  });
};
export default swit;