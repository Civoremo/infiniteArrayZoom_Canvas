/** @format */

import React, { createFactory } from "react";
import "./App.css";

import Canvas from "./canvas";

let columns = 10;
let rows = 10;
let grid;

const create2dGrid = () => {
  const arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(rows);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
};

grid = create2dGrid();

const draw2dGrid = (ctx) => {
  let cellSize = ctx.canvas.width / columns;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let x = cellSize * i;
      let y = cellSize * j;

      ctx.beginPath();
      ctx.rect(x, y, cellSize, cellSize);
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();

      if (i === 4 && j === 5) {
        ctx.beginPath();
        ctx.rect(x, y, cellSize, cellSize);
        ctx.fillStyle = "darkgreen";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Canvas Infinite Zoom</h2>
        <Canvas draw2dGrid={draw2dGrid}></Canvas>
      </header>
    </div>
  );
}

export default App;
