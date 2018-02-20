import { CostButton } from '../Button';
import Stats from './ArmyStats';
import { ArrayLengthText, Text } from '../Text';

export default class {
    constructor(state) {
        this.state = state;
        this.stats = Stats;
        Stats.Footman.Stats.FoodPerActivity().Value = 
            Stats.Footman.Stats.FoodPerActivity().LevelUp();
        let spacing = 62;
        let x = state.world.width - 32;
        let y = (state.world.height - 64);

        
        // Row 1
        this.buyFootman = new CostButton(state, 
            x, 
            y, 
            'FootmanButton',
            0.3,
            () => { this.Buy(Stats.Footman); },
            Stats.Footman
        );
        new ArrayLengthText(this.state, this.buyFootman.x-20, this.buyFootman.y+20, Stats.Footman.Owned.array, 15);

        this.buyArcher = new CostButton(state,
            x - spacing * 1,
            y,
            'ArcherButton',
            0.3,
            () => { this.Buy(Stats.Archer); },
            Stats.Archer
        );
        new ArrayLengthText(this.state, this.buyArcher.x - 20, this.buyArcher.y + 20, Stats.Archer.Owned.array, 15);
        

        // Row 2
        this.buyFarmer = new CostButton(state,
            x - spacing * 0,
            y - spacing * 1,
            'FarmerButton',
            0.3,
            () => { this.Buy(Stats.Farmer); },
            Stats.Farmer
        );
        new ArrayLengthText(this.state, this.buyFarmer.x - 20, this.buyFarmer.y + 20, Stats.Farmer.Owned.array, 15);
        
        this.buyMiner = new CostButton(state,
            x - spacing * 1,
            y - spacing * 1,
            'MinerButton',
            0.3,
            () => { this.Buy(Stats.Miner); },
            Stats.Miner
        );
        new ArrayLengthText(this.state, this.buyMiner.x - 20, this.buyMiner.y + 20, Stats.Miner.Owned.array, 15);        
    }
    Buy(unit) {
        if (this.state.gold >= unit.Cost) {
            unit.Owned.push(new unit.UnitType(this.state, unit));
            this.state.Gold(-unit.Cost);
            // gold sound
        }
    }

    UpdatePopulation() {
        this.state.populationText.text = "Population: " + this.state.population + " / " + this.state.playerStats.PopulationLimit;
    }

    GetPopulation() {
        let length = 0;
        for (var key in this.stats) {
            for (var obj in this.stats[key]) {
                if (obj == 'Owned') {
                    length +=  this.stats[key][obj].array.length;
                }
            }
        }
        return length;
    }
}