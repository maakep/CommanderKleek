import * as Units from './Units';

export default {
    Footman: {
        Cost: 100,
        UnitType: Units.Footman,
        Owned: new Array(),
        Stats: {
            FoodPerActivity: -3,
            GoldPerActivity : -0.3,
            KillsPerActivity: 3, 
            ActivityCooldown: 4,
        },
    },
    Archer: {
        Cost: 150,
        UnitType: Units.Archer,
        Owned: new Array(),
        Stats: {
            FoodPerActivity: 0,
            GoldPerActivity : 0,
            KillsPerActivity: 1, 
            ActivityCooldown: 0.01,
        },
    },
    Farmer: {
        Cost: 100,
        UnitType: Units.Farmer,
        Owned: new Array(),
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
        Owned: new Array(),
        Stats: {
            FoodPerActivity: -10,
            GoldPerActivity : 40,
            KillsPerActivity: 0, 
            ActivityCooldown: 10,
        },
    }
}