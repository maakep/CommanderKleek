import Phaser from 'phaser'

export class Button extends Phaser.Button {
  constructor (state, x, y, image, scale, func) {
    super(state.game, x, y, image);
    this.state = state;
    this.origScale = scale;

    this.anchor.setTo(0.5);
    this.scale.setTo(scale);
    this.inputEnabled = true;
    this.events.onInputUp.add(func, state);
    this.events.onInputUp.add(this.Up, this);
    this.events.onInputDown.add(this.Down, this);
    this.events.onInputOver.add(this.Over, this);
    this.input.useHandCursor = true;
    this.game.add.existing(this);
  }

  Over() {
  }

  Down() {
    this.scale.setTo(this.origScale * 0.9);
  }

  Up() {
    this.scale.setTo(this.origScale * 1);
  }
}

export class CostButton extends Button {
  constructor (state, x, y, image, scale, func, cost) {
    super(state, x, y, image, scale, func);
    this.cost = cost;
  }

  update() {
    if (this.state.gold < this.cost) {
      this.tint = 0xff0000;
    } else {
      this.tint = 0xffffff;
    }
  }
}