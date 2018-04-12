import Reavas from 'reavas';

class FixedClickHandler extends Reavas {
  setup(canvas) {
    this.x = 100;
    this.y = 100;
    this.width = 100;
    this.height = 100;
    this.clickTarget = '';

    canvas.onclick = (e) => {
      const { offsetX, offsetY } = e;

      if (offsetX > this.x && offsetX < this.x + this.width &&
        offsetY > this.y && offsetY < this.y + this.height) {
          this.clickTarget = 'THE SQUARE';
        } else {
          this.clickTarget = 'canvas';
        }

        this.clickTarget += ` {x: ${e.offsetX}, y: ${e.offsetY}}`;
    };
  }

  paint(canvas, context) {
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'white';
    context.fillStyle = 'crimson';
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.stroke();

    context.fillStyle = 'white';
    context.font = "16px Source Code Pro";
    context.fillText(`You clicked: ${this.clickTarget}`, 0, 40);
  }
}

export default FixedClickHandler;
