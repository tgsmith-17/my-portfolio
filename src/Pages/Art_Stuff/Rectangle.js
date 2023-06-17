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

  moveToMouse(x, y)
  {
    this.x += (x * this.depth);
    this.y += (y * this.depth);
  };
};

export default Rectangle;