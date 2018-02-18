import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.spritesheet('footmanButton', './assets/images/FootmanButton.png');
    this.load.spritesheet('ArcherButton', './assets/images/ArcherButton');
    this.load.spritesheet('FarmerButton', './assets/images/FarmerButton');
    this.load.spritesheet('MinerButton', './assets/images/MinerButton');
    this.load.image('attack', 'assets/images/green circle.png');
    this.load.image('player', './assets/images/deathzone.png');
    this.load.image('button', './assets/images/Button.png');    
  }

  create () {
    const bannerText = 'Commander Kleek'
    let banner = this.add.text(this.world.centerX, 80, bannerText, {
      font: '40px MedievalSharp',
      fill: '#77BFA3',
      smoothed: false
    });

    banner.padding.set(10, 16);
    banner.anchor.setTo(0.5);
    var _ = this;
    // this.game.input.onDown.add(function(e) {   
      _.state.start('Game');
    // });
  }
}
