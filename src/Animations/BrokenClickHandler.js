import Reavas from 'reavas';

class BrokenClickHandler extends Reavas {
  setup(canvas) {
    this.clickTarget = '';

    canvas.onclick = (e) => {
      this.clickTarget = `canvas {x: ${e.offsetX}, y: ${e.offsetY}}`;
    };
  }

  paint(canvas, context) {
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'white';
    context.fillStyle = 'crimson';
    context.rect(100, 100, 100, 100);
    context.fill();
    context.stroke();

    context.fillStyle = 'white';
    context.font = "16px Source Code Pro";
    context.fillText(`You clicked: ${this.clickTarget}`, 0, 40);
  }
}

export default BrokenClickHandler;
