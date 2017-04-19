var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Rectangle = require('./rectangle.js');


try {
  let a = new Triangle({ width: 100, height: 100 });
  let s = a.getArea();
  console.log(s);

  let sq = new Square({ width: 100});
  s = sq.getArea();
  console.log(s);
  
  let re = new Rectangle({ width: 100, height: 10});
  s = re.getArea();
  console.log(s);

  let bg = new Bug({ width: 100, height: 10});
  s = bg.getArea();
  console.log(s);
}
catch (e) {
  console.log(e.message);
}
