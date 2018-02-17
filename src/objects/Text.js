import Phaser from 'phaser';

export class Text extends Phaser.Text {
    constructor(state, x, y, text, size = 20, anchorX = 0.5, anchorY = 0.5) {
        super(state.game, x, y, text, {
            font: size + 'px MedievalSharp',
            fill: '#77BFA3',
            smoothed: false });
        this.anchor.setTo(anchorX, anchorY);
        state.game.add.existing(this);
    }
}

export class ArrayLengthText extends Phaser.Text {
    constructor(state, x, y, array, size = 20, anchorX = 0.5, anchorY = 0.5) {
        super(state.game, x, y, array.length, {
            font: size + 'px MedievalSharp',
            fill: '#77BFA3',
            smoothed: false });
        this.anchor.setTo(anchorX, anchorY);
        this.array = array;
        state.game.add.existing(this);
    }

    update() {
        if (this.array.length != this.text)
            this.text = this.array.length;
    }
}