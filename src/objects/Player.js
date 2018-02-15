import Phaser from 'phaser';
import Text from './Text';

export default class extends Phaser.Sprite {
  constructor (state) {
    super(state.game, state.world.width, state.world.height, 'player');
    this.anchor.setTo(1);
    this.width = 300;
    this.height = 30;

    state.game.add.existing(this);
  }
}
