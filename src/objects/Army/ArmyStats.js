import * as Units from './Units';
import { QuantityArray } from '../../utils';

export default {
    Footman: {
        Cost: 30,
        UnitType: Units.Footman,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: -3,
            GoldPerActivity : -0.3,
            KillsPerActivity: 3, 
            ActivityCooldown: 4,
            ChanceToDie: 5,
        },
    },
    Archer: {
        Cost: 150,
        UnitType: Units.Archer,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: 0,
            GoldPerActivity : 0,
            KillsPerActivity: 1, 
            ActivityCooldown: 1,
        },
    },
    Farmer: {
        Cost: 100,
        UnitType: Units.Farmer,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: 40,
            GoldPerActivity : -5,
            KillsPerActivity: 0, 
            ActivityCooldown: 10,
        },
    },
    Miner: {
        Cost: 200,
        UnitType: Units.Generic,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: -10,
            GoldPerActivity : 40,
            KillsPerActivity: 0, 
            ActivityCooldown: 10,
        },
    }
}