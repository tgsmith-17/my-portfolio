class Rectangle
{
  // Keep trying to move rectangle movement function here

  constructor(width, height)
  {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.width = Math.floor(Math.random()*150) + 50;
    this.height = Math.floor(Math.random()*150) + 75;
    this.depth = Math.random()*4 + 0.5;
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  moveXToMouse(x)
  {
    return this.x + -(x * this.depth);
  };

  moveYToMouse(y)
  {
    return this.y + -(y * this.depth);
  };
};

export default Rectangle;