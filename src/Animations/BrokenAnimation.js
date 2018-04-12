import Reavas from 'reavas';

class BrokenAnimation extends Reavas {
  setup(canvas) {
    this.steps = [];
    this.width = 200;
    this.height = 100;

    this.x = this.width * -1;
    this.y = (canvas.height / 2) - (this.height / 2);
  }

  paint(canvas, context) {
    this.x += 5;

    this.steps.push(this.x);
    this.steps.forEach(s => {
      context.beginPath();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.fillStyle = 'crimson';
      context.rect(s, this.y, this.width, this.height);
      context.fill();
      context.stroke();
    });

    if (this.x > canvas.width) {
      this.x = this.width * -1;
      this.steps = [];
    }
  }
}

export default BrokenAnimation;