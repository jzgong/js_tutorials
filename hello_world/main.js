/* global paper */

$(document).ready(() => {
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  for (let x = 25; x < 400; x += 50) {
    for (let y = 25; y < 400; y += 50) {
      const c = paper.Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }

  const tool = new paper.Tool();

  tool.onMouseDown = function (event) {
    const c = paper.Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };

  const c = paper.Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  const text = new paper.PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';


  paper.view.draw();
});
