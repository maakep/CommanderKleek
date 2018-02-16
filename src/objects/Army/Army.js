import { CostButton } from '../Button';
import Stats from './ArmyStats';

export default class {
    constructor(state) {
        this.state = state;
        this.stats = Stats;
        
        let spacing = 62;
        let x = state.world.width - 32;
        let y = (state.world.height - 64);

        // Row 1
        this.addFootman = new CostButton(state, 
            x, 
            y, 
            'button',
            0.3,
            () => { this.Buy(Stats.Footman); },
            Stats.Footman.Cost
        );
        
        this.addPikeman = new CostButton(state,
            x - spacing * 1,
            y,
            'button',
            0.3,
            () => { this.Buy(Stats.Archer); },
            Stats.Archer.Cost
        );

        // Row 2
        this.buyFarmer = new CostButton(state,
            x - spacing * 0,
            y - spacing * 1,
            'button',
            0.3,
            () => { this.Buy(Stats.Farmer); },
            Stats.Farmer.Cost
        );

    }
    Buy(unit) {
        if (this.state.gold >= unit.Cost) {
            unit.Owned.push(new unit.UnitType(this.state, unit));
            this.state.Gold(-unit.Cost);
        }
    }
}