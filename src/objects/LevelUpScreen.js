import phaser from 'phaser';

class LevelUpScreen extends Phaser.Sprite {
    constructor(state) {
        super(state.game, 0, 600, 'lvlupbackground');
        this.state = state;

        this.showing = false;


        this.lvlupGroup = this.state.add.group();
        this.lvlupGroup.add(this);
        this.game.add.existing(this);
    }

    toggle () {
        let direction;
        if (this.showing) {
            direction = '+600';
        } else {
            direction = '-600';
        }
        this.game.add.tween(this).to( { y: direction }, 200, Phaser.Easing.Cubic.InOut, true);
    }
}

export default LevelUpScreen;