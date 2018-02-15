import Footman from './Footman';
import AddFootman from '../Button';

export default class {
    constructor(state) {
        this.footmanCost = 100;

        this.footmen = new Array();
        this.state = state;

        this.addFootman = new AddFootman(state, 
                                        state.world.width - 32, 
                                        state.world.height - 64, 
                                        'button', 
                                        () => { this.BuyFootman(); });
        this.addFootman.scale.setTo(0.3);
    }
    BuyFootmen(quantity) {
        for (let i = 0; i < quantity; i++)
            BuyFootman();
    }
    BuyFootman() {
        if (this.state.gold >= this.footmanCost) {
            this.footmen.push(new Footman(this.state));
            this.state.Gold(-this.footmanCost);                
        } else {
            // Mwep mwop, not enough gold. Construct additional pylons
        }
    }
}