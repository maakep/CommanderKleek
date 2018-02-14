/* globals __DEV__ */
import Phaser from 'phaser';
import AttackButton from '../sprites/AttackButton';
import Footman from '../sprites/Footman';
import Player from '../sprites/Player';

export default class extends Phaser.State {

  init () {}
  preload () {
    this.kills = 0;    
    this.killText;
    this.army = new Array();
  }

  create () {
    const bannerText = 'Commander Kleek'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px MedievalSharp',
      fill: '#77BFA3',
      smoothed: false
    });

    banner.padding.set(10, 16);
    banner.anchor.setTo(0.5);

    this.attackButton = new AttackButton({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'attack'
    });
    this.attackButton.inputEnabled = true;
    this.attackButton.events.onInputDown.add(() => this.attackButton.listener(this), this);
    this.game.add.existing(this.attackButton);

    this.killText = game.add.text(this.world.centerX, 32, this.kills, { 
      font: '40px MedievalSharp',
      fill: '#77BFA3',
      smoothed: false} 
    );
    this.killText.anchor.setTo(0.5);

    this.player = new Player({
      game: this.game,
      x: this.world.width,
      y: this.world.height,
      asset: 'player'
    });
    this.game.add.existing(this.player);
  }

  Kill(quantity) {
    this.kills += quantity;
    this.killText.text = this.kills;
  }

  AddFootman(quant) {
    for (let i = 0; i < quant; i++)
      this.army.push(new Footman(this));
  }
  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.attackButton, 32, 32)
    }
  }
}
