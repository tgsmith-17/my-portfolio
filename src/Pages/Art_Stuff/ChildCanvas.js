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

  let x, y;

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Using this as an example for now
  const draw = (ctx) => {
    x = mousePos.x - (width / 2);
    y = mousePos.y - (height / 2);


    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.fillRect(0, 0, 50, 50);
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
  }, []);

  return (
  <div>
    <h2 style={{'color': 'white'}}>{width}, {height}</h2>
    <h2 style={{'color': 'white'}}>{x}, {y}</h2>
    <canvas ref={canvasRef} />
  </div>
  );
};

export default ChildCanvas;