import { useRef, useEffect, useState } from "react";
import Rectangle from './Rectangle.js';

let rectangles = [];

const width = window.innerWidth;
const height = window.innerHeight;

// tmp var for debugging
let rect = new Rectangle(width, height);

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
    let x = (-mousePos.x - (width / 2)) * 0.05;
    let y = (-mousePos.y - (height / 2)) * 0.05;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();

    //rect.moveToMouse(x, y);

    // if(rect) {
    //   console.log("It does indeed exist");
    // }

    // ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

    rectangles.forEach(r => {
      r.moveToMouse(x, y);
      ctx.fillRect(r.x,  r.y, r.width, r.height);
    });

    // for(let i = 0; i < rectangles.length; i++) {

    //   rectangles[i].moveToMouse(x, y);

    //   ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
    // }
    ctx.fill();
    //console.log(rectangles[0].x + ', ' + rectangles[0].y);
  };
  
  useEffect(() => {
    const can = canvasRef.current;
    const context = can.getContext('2d');

    context.canvas.width = width;
    context.canvas.height = height;

    context.translate(width/2, height/2);

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