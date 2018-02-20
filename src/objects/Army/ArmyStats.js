import * as Units from './Units';
import { QuantityArray } from '../../utils';

var stats = {
    Footman: {
        Cost: 30,
        UnitType: Units.Footman,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: () => {
                return {
                    Value: -3,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            GoldPerActivity : () => {
                return {
                    Value: -0.3,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            KillsPerActivity: () => {
                return {
                    Value: 3,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            }, 
            ActivityCooldown: () => {
                return {
                    Value: 4,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            ChanceToDie: () => {
                return {
                    Value: 3,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
        },
    },
    Archer: {
        Cost: 150,
        UnitType: Units.Archer,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: () => {
                return {
                    Value: -0.5,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            GoldPerActivity : () => {
                return {
                    Value: -3,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            KillsPerActivity: () => {
                return {
                    Value: 1,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            }, 
            ActivityCooldown: () => {
                return {
                    Value: 1,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
        },
    },
    Farmer: {
        Cost: 100,
        UnitType: Units.Farmer,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: () => {
                return {
                    Value: 30,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            GoldPerActivity : () => {
                return {
                    Value: -10,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            KillsPerActivity: () => {
                return {
                    Value: 0,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            }, 
            ActivityCooldown: () => {
                return {
                    Value: 10,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
        },
    },
    Miner: {
        Cost: 200,
        UnitType: Units.Generic,
        Owned: new QuantityArray(),
        PopulationSize: 1,
        Stats: {
            FoodPerActivity: () => {
                return {
                    Value: -10,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            GoldPerActivity : () => {
                return {
                    Value: 30,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
            KillsPerActivity: () => {
                return {
                    Value: 0,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            }, 
            ActivityCooldown: () => {
                return {
                    Value: 10,
                    LevelUp: function() {GenericLevelUp(this)},
                }
            },
        },
    }
}

export default stats;

function GenericLevelUp(stat) {
    return stat.Value *= 1.2;
}