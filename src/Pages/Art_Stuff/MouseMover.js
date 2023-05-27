import { useState, useEffect } from "react";

function MouseMover()
{
  const [mousePos, setMousePos] = useState({});

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

  return(
    <div className="mover">
      <h3>
        The mouse is at <b>({mousePos.x}, {mousePos.y})</b>
      </h3>
    </div>
  );
};

export default MouseMover;