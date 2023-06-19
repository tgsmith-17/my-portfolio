/*
  TODO:
  Sort rects from least to greatest by depth
*/

import { useRef, useEffect, useState } from "react";
import Rectangle from './Rectangle.js';

let rectangles = [];

const width = window.innerWidth;
const height = window.innerHeight;

for(let i = 0; i < 45; i++) {
  rectangles.push(new Rectangle(width, height));
}

function ChildCanvas() {

  let [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({x: e.clientX, y: e.clientY});
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      setMousePos({});
    };
  }, []);

  const canvasRef = useRef(null);

  console.log(rectangles[0].width);

  // Using this as an example for now
  const draw = (ctx) => {
    let x = mousePos.x * 0.1;
    let y = mousePos.y * 0.1;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    for(let i = 0; i < rectangles.length; i++) {
      ctx.fillStyle = rectangles[i].color;
      let tmpX = rectangles[i].moveXToMouse(x);
      let tmpY = rectangles[i].moveYToMouse(y);
      ctx.fillRect(tmpX, tmpY, rectangles[i].width, rectangles[i].height);
    }
    ctx.fill();
    //console.log(rectangles[0].x + ', ' + rectangles[0].y);
  };
  
  useEffect(() => {
    const can = canvasRef.current;
    const context = can.getContext('2d');

    context.canvas.width = width;
    context.canvas.height = height;

    let animationFrameID;

    const render = () => {
      draw(context);
      animationFrameID = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameID);
    };
  }, [draw]);

  return (
  <div>
    <canvas ref={canvasRef} />
  </div>
  );
};

export default ChildCanvas;