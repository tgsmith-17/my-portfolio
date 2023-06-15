class Rectangle
{
  constructor(width, height)
  {
    this.x = Math.floor(Math.random()*width) - (width / 2);
    this.y = Math.floor(Math.random()*height) - (height / 2);
    this.width = Math.floor(Math.random()*150);
    this.height = Math.floor(Math.random()*150);
    this.depth = Math.random();
  };

  calcMoveX(x)
  {
    this.x += x * this.depth;
  };
  
  calcMoveY(y)
  {
    this.y += y * this.depth;
  };
};

export default Rectangle;