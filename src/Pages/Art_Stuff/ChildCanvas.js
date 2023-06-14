import { useRef, useEffect, useState } from "react";

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

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Using this as an example for now
  const draw = (ctx) => {
    let x = mousePos.x - (width / 2);
    let y = mousePos.y - (height / 2);

    let rectX = Math.floor(-x * 0.05);
    let rectY = Math.floor(-y * 0.05);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.fillRect(rectX, rectY, 50, 50);
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