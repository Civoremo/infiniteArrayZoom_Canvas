/** @format */

import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const {} = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");

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
