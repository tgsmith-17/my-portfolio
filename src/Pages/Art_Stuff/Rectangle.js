class Rectangle
{
  constructor(width, height)
  {
    this.x = Math.floor(Math.random()*width);
    this.y = Math.floor(Math.random()*height);
    this.width = Math.floor(Math.random()*150);
    this.height = Math.floor(Math.random()*150);
  };

  calcMoveX(x)
  {
    return(-x / this.x * 0.05);
  };
  
  calcMovey(y)
  {
    return(-y / this.y * 0.05);
  };
};