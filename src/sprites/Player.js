import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.game = game;
    this.anchor.setTo(1);
    this.scale.setTo(1, 0.2);
  }

  create() {
      // not working
    this.goldText = this.game.add.text(this.world.centerX*1.5, 32, "ello", { 
        font: '40px MedievalSharp',
        fill: '#77BFA3',
        smoothed: false} 
      );
  }
}
