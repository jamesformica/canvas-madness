import Reavas from 'reavas';

class FixedAnimation extends Reavas {
  setup(canvas) {
    this.width = 200;
    this.height = 100;

    this.x = this.width * -1;
    this.y = (canvas.height / 2) - (this.height / 2);
  }

  paint(canvas, context) {
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'white';
    context.fillStyle = 'crimson';
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.stroke();

    this.x += 3;

    if (this.x > canvas.width) {
      this.x = this.width * -1;
    }
  }
}

export default FixedAnimation;