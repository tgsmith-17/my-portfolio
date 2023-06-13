import { useRef, useEffect } from "react";

const ChildCanvas = (props, MouseX, MouseY) => {
  const canvasRef = useRef(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Using this as an example for now
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(50, 50, 10*Math.sin(frameCount)**2, 0, 2 * Math.PI);
    ctx.fill();
  };


  // const draw = (ctx, frameCount) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // };

  const canvasStyle = {
    // 'backgroundColor': 'gray',
    'width': `${width}px`,
    'height': `${height}px`
  };
  
  useEffect(() => {
    const can = canvasRef.current;
    const context = can.getContext('2d');

    let frameCount = 0;
    let animationFrameID;

    let ratio = Math.min(context.clientWidth / width, context.clientHeight / height);

    context.scale(ratio, ratio);

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameID = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameID);
    };
  }, [draw]);

  return (
  <div>
    <h2 style={{'color': 'white'}}>{width}, {height}</h2>
    <canvas style={canvasStyle} ref={canvasRef} {...props} />
  </div>
  );
};

export default ChildCanvas;