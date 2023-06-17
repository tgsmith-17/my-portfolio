class Rectangle
{
  // Keep trying to move rectangle movement function here

  constructor(width, height)
  {
    this.x = Math.floor(Math.random()*width);
    this.y = Math.floor(Math.random()*height);
    this.width = Math.floor(Math.random()*150);
    this.height = Math.floor(Math.random()*150);
    this.depth = Math.random();
  };

  // calcMove(x_in, y_in)
  // {
  //   this.x += x_in * this.depth;
  //   this.y += y_in * this.depth;
  // };
};

export default Rectangle;