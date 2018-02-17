import { CostButton } from '../Button';
import Stats from './ArmyStats';
import { ArrayLengthText, Text } from '../Text';

export default class {
    constructor(state) {
        this.state = state;
        this.stats = Stats;
        
        let spacing = 62;
        let x = state.world.width - 32;
        let y = (state.world.height - 64);

        
        // Row 1
        this.buyFootman = new CostButton(state, 
            x, 
            y, 
            'button',
            0.3,
            () => { this.Buy(Stats.Footman); },
            Stats.Footman.Cost
        );
        this.footmanText = new ArrayLengthText(this.state, this.buyFootman.x-20, this.buyFootman.y+20, Stats.Footman.Owned.array, 15);

        this.buyArcher = new CostButton(state,
            x - spacing * 1,
            y,
            'button',
            0.3,
            () => { this.Buy(Stats.Archer); },
            Stats.Archer.Cost
        );
        this.footmanText = new ArrayLengthText(this.state, this.buyArcher.x - 20, this.buyArcher.y + 20, Stats.Archer.Owned.array, 15);
        

        // Row 2
        this.buyFarmer = new CostButton(state,
            x - spacing * 0,
            y - spacing * 1,
            'button',
            0.3,
            () => { this.Buy(Stats.Farmer); },
            Stats.Farmer.Cost
        );
        this.footmanText = new ArrayLengthText(this.state, this.buyFarmer.x - 20, this.buyFarmer.y + 20, Stats.Farmer.Owned.array, 15);
        

        // Row 3
        this.buyMiner = new CostButton(state,
            x - spacing * 0,
            y - spacing * 2,
            'button',
            0.3,
            () => { this.Buy(Stats.Miner); },
            Stats.Miner.Cost
        );
        this.footmanText = new ArrayLengthText(this.state, this.buyMiner.x - 20, this.buyMiner.y + 20, Stats.Miner.Owned.array, 15);        
    }
    Buy(unit) {
        if (this.state.gold >= unit.Cost) {
            unit.Owned.push(new unit.UnitType(this.state, unit));
            this.state.Gold(-unit.Cost);
            // gold sound
        }
    }
}