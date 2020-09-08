/** @format */

import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const {draw2dGrid} = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");

    draw2dGrid(ctx)

    return () => {};
  }, []);

  return (
    <div>
      <canvas
        width={300}
        height={300}
        ref={canvasRef}
        style={{ background: "lightgrey" }}
      ></canvas>
    </div>
  );
};

export default Canvas;
