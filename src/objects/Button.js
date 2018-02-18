import Phaser from 'phaser'

export class Button extends Phaser.Button {
  constructor (state, x, y, image, scale, func) {
    super(state.game, x, y, image, func, 2, 1, 3);
    this.state = state;
    this.origScale = scale;
    this.interactable = true;

    this.anchor.setTo(0.5);
    this.scale.setTo(scale);
    this.inputEnabled = true;
    this.events.onInputUp.add(this.Up, this);
    this.events.onInputDown.add(this.Down, this);
    this.events.onInputOver.add(this.Over, this);
    this.input.useHandCursor = true;
    this.game.add.existing(this);
  }

  Over() {
  }

  Down() {
    if (this.interactable)
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
      this.interactable = false;
      this.tint = 0xff0000;
    } else {
      this.interactable = true;
      this.tint = 0xffffff;
    }
  }
}