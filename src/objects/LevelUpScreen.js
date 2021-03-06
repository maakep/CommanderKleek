import phaser from 'phaser';
import { Button } from './Button';
import { Text } from './Text';

class LevelUpScreen extends Phaser.Sprite {
    constructor(state, stats) {
        super(state.game, 0, 600, 'lvlupbackground');
        this.state = state;
        this.stats = stats;
        this.showing = false;
        
        this.addChild(
            new Button(this.state, this.state.world.width, 0, 'button', 0.3, () => { this.hide() }, 1, 0)
        );
        this.priorityId = 1;
        this.inputEnabled = true;

        let x = 20;
        let y = 20;
        for (let unit in this.stats) {
            for (let stat in this.stats[unit].Stats) {
                let value = this.stats[unit].Stats[stat]().Value;
                let levelUpFunc = this.stats[unit].Stats[stat]().LevelUp();

                this.addChild(
                    new Text(this.state, x + 90, y, value, 10, 0, 0.5)
                )
                this.addChild(
                    new Text(this.state, x, y, stat, 10, 0, 0.5)
                );
                this.addChild(
                    new Button(this.state, x + 110, y, 'button', 0.1, () => {
                        this.stats[unit].Stats[stat]().Value = levelUpFunc;
                        this.state.skillPoints--;
                    })
                );
                y += 20;
            }
        }

        this.game.add.existing(this);
    }

    show() {
        if (!this.showing) {
            this.tween('-600');
        }
    }

    hide() {
        if (this.showing) {
            this.tween('+600');
        }
    }

    toggle () {
        let direction;
        if (this.showing) {
            direction = '+600';
        } else {
            direction = '-600';
        }
        this.tween(direction);
    }

    tween(dir) {
        this.game.add.tween(this).to( { y: dir }, 200, Phaser.Easing.Cubic.InOut, true);

        if (dir == '-600') {
            this.showing = true;
        } else {
            this.showing = false;
        }
    }
}

export default LevelUpScreen;