import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor (state, x, y, image, func) {
    super(state.game, x, y, image);
    this.anchor.setTo(0.5);
    this.inputEnabled = true;
    this.events.onInputDown.add(func, state);
    this.game.add.existing(this);
  }
}
