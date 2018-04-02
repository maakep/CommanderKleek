import phaser from 'phaser';
import { Button } from './Button';

class StatUpgrader extends Button {
    constructor (state, x, y, image, scale, func, anchorX = 0.5, anchorY = 0.5) {
        super(state.game, x, y, image, func, 2, 1, 3);
    }
}