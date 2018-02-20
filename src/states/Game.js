/* globals __DEV__ */
import Phaser from 'phaser';
import Army from '../objects/Army/Army';
import Player from '../objects/Player';
import { Text } from '../objects/Text';
import { Button } from '../objects/Button';
import PlayerStats from '../objects/PlayerStats';

export default class extends Phaser.State {

  init () {}
  preload () {
    this.playerStats = PlayerStats;

    this.kills = 0;
    this.experience = 0; // TODO: Experience. Set level requirements in separate object. track levels and give skill ups on level ups.
    this.food = 200;
    this.gold = 0;
    this.population = 0;
    // Stats
    this.foodPerKill = 0.2;
    this.goldPerKill = 0.7;
    this.stage.disableVisibilityChange = true;
  }

  create () {
    this.army = new Army(this);

    this.attackButton = new Button(this, this.world.centerX, this.world.centerY, 'attack', 1, () => this.Kill(PlayerStats.KillsPerHit));

    this.killText = new Text(this, this.world.centerX, 32, this.kills, 75);

    this.player = new Player(this);

    this.goldText = new Text(this, 32, this.world.height - 10, "Gold: " + this.gold);
    this.goldText.anchor.setTo(0, 1);

    this.foodText = new Text(this, 32, this.world.height - 30, "Food: " + this.food);
    this.foodText.anchor.setTo(0, 1);

    let length = this.army.GetPopulation();
    this.populationText = new Text(this, 32, this.world.height - 50, "Population: " + length + " / " + PlayerStats.PopulationLimit);
    this.populationText.anchor.setTo(0, 1);

    // Do this.
    this.lvlupScreen = this.add.group();    
    // this.lvlupScreen.add();

  }

  Food(quantity) {
    this.food += quantity;
    this.foodText.text = "Food: " + Math.floor(this.food);
  }

  Kill(quantity) {
    this.Food(this.foodPerKill * quantity);
    this.Gold(this.goldPerKill);
    this.kills += quantity;
    this.killText.text = this.kills;
  }

  Gold(quantity) {
    this.gold += quantity;
    this.goldText.text = "Gold: " + Math.floor(this.gold);
  }

  update() {
    this.population = this.army.GetPopulation();
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.attackButton, 32, 32)
    }
  }
}
