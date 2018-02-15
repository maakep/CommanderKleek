import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor (state) {
    super(state.game, state.world.centerX, state.world.centerY, 'attack');
    this.anchor.setTo(0.5);
    this.inputEnabled = true;
    this.events.onInputDown.add(() => this.listener(state), this);
    this.game.add.existing(this);
    

    this.KillsPerHit = 1;
  }

  listener(state) {
      state.Kill(this.KillsPerHit);
  }
}
