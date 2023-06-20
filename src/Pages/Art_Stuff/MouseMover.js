import ChildCanvas from "./ChildCanvas";

function MouseMover()
{
  const buttonStyle = {
    'padding': '10px',
    'backgroundColor': 'red',
    'color': 'white',
    'border': 'none',
    'borderRadius': '15px',
    'outline': 'none'
  };

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