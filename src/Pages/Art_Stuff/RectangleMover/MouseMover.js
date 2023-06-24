import ChildCanvas from "./ChildCanvas";

function MouseMover()
{
  return(
    <>
    <div>
      {/* <button style={buttonStyle} onClick={window.close}>Close Tab</button> */}
      <ChildCanvas />
    </div>
    </>
  );
};

export default MouseMover;