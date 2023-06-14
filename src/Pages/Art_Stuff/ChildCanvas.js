import { useRef, useEffect, useState } from "react";
import Rectangle from './Rectangle';

function ChildCanvas() {
  const rectangles = [];

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

  const width = window.innerWidth;
  const height = window.innerHeight;

  for(let i = 0; i < 45; i++) {
    rectangles.push(new Rectangle(width, height));
  }

  // Using this as an example for now
  const draw = (ctx) => {
    let x = mousePos.x - (width / 2);
    let y = mousePos.y - (height / 2);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    for(let i = 0; i < rectangles.length; i++) {
      ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
    }
    ctx.fill();
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