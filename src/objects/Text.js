import Phaser from 'phaser';

export default class extends Phaser.Text {
    constructor(state, x, y, text) {
        super(state.game, x, y, text, {
            font: '20px MedievalSharp',
            fill: '#77BFA3',
            smoothed: false });
        this.anchor.setTo(0.5);
        state.game.add.existing(this);
    }
}