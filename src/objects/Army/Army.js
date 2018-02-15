import Footman from './Footman';
import { CostButton } from '../Button';
import Stats from './ArmyStats';

export default class {
    constructor(state) {
        this.footmen = new Array();
        this.state = state;

        this.addFootman = new CostButton(state, 
            state.world.width - 32, 
            state.world.height - 64, 
            'button',
            0.3,
            () => { this.Buy(Stats.Footman); },
            Stats.Footman.Cost);
        
        this.addPikeman = new CostButton(state,
            state.world.width - 84,
            state.world.height - 64,
            'button',
            0.3,
            () => { this.Buy(Stats.Archer); },
            Stats.Archer.Cost);

    }
    Buy(unit) {
        if (this.state.gold >= unit.Cost) {
            unit.Owned.push(new unit.UnitType(this.state));
            this.state.Gold(-unit.Cost);
        }
    }
}