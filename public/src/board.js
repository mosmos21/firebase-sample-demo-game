'use strict';

const selectAll = query => document.querySelectorAll(query);
const select = query => document.querySelector(query);

export default {
  resetCellColorAll: () => {
    selectAll('#board > div').forEach(i => i.style.backgroundColor = '#AAA');
  },
  setCellColor: (position, color) => {
    select(`#board > div:nth-child(${position})`).style.backgroundColor = color;
  },
  setConsoleMessage: (msg, color) => {
    const con = select('#console');
    con.innerText = msg;
    if (color) {
      con.style.color = color;
    }
  }
};