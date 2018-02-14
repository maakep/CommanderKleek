import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.anchor.setTo(0.5);
    this.KillsPerHit = 1;
  }

  create() {
      this.inputEnabled = true;
  }

  listener(state) {
      // state.Kill(this.KillsPerHit);
      state.AddFootman(1);
  }
}
