import { useState, useEffect } from "react";
import ChildCanvas from "./ChildCanvas";

function MouseMover()
{
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

  return(
    <div>
      <h3 className="mover">
        <b>({mousePos.x}, {mousePos.y})</b>
      </h3>
      <ChildCanvas MouseX={mousePos.x} MouseY={mousePos.y} />
    </div>
  );
};

export default MouseMover;