import Phaser from 'phaser';
import Text from './Text';

export default class ExperienceBoarder extends Phaser.Sprite {
  constructor(state) {
    super(state.game, state.world.centerX, state.world.height-22, 'exp boarder');
    this.anchor.setTo(0.5);
    new ExperienceBar(state);

    state.game.add.existing(this);
  }
}

class ExperienceBar extends Phaser.Sprite {
  constructor (state) {
    super(state.game, 0, state.world.height-22, 'exp bar');
    this.anchor.setTo(0, 0.5);
    this.state = state;
    state.game.add.existing(this);
  }

  update() {
    this.scale.x = this.state.experience / this.state.experienceNextLevel;
  }
}


