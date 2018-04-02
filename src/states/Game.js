/* globals __DEV__ */
import Phaser from 'phaser';
import Army from '../objects/Army/Army';
import ExperienceBar from '../objects/ExperienceBar';
import { Text } from '../objects/Text';
import { Button } from '../objects/Button';
import PlayerStats from '../objects/PlayerStats';
import LevelUpScreen from '../objects/LevelUpScreen';

export default class extends Phaser.State {

  init () {}
  preload () {
    this.playerStats = PlayerStats;

    this.kills = 0;
    this.experience = 0; // TODO: Experience. Set level requirements in separate object. track levels and give skill ups on level ups.
    this.experienceNextLevel = 200;
    this.skillPoints = 0;

    this.food = 200;
    this.gold = 0;
    this.population = 0;
    this.stage.disableVisibilityChange = true;
  }

  create () {
    this.army = new Army(this);

    this.attackButton = new Button(this, this.world.centerX, this.world.centerY, 'attack', 1, () => this.Kill(this.playerStats.KillsPerHit));

    this.killText = new Text(this, this.world.centerX, 32, this.kills, 75);
     

    this.goldText = new Text(this, 32, this.world.height - 50, "Gold: " + this.gold);
    this.goldText.anchor.setTo(0, 1);

    this.foodText = new Text(this, 32, this.world.height - 70, "Food: " + this.food);
    this.foodText.anchor.setTo(0, 1);

    let length = this.army.GetPopulation();
    this.populationText = new Text(this, 32, this.world.height - 90, "Population: " + length + " / " + this.playerStats.PopulationLimit);
    this.populationText.anchor.setTo(0, 1);

    // WIP >
    this.player = new ExperienceBar(this);
    
    this.lvlupButton = new Button(this, this.world.centerX, this.world.height - 65, 'button', 0.3, () => { this.lvlupScreen.show() });
     
    this.lvlupScreen = new LevelUpScreen(this, this.army.stats);
    
    // Debug purposes
    this.logText = new Text(this, 30, 20, '', 30, 0, 0);
    window.log = (text) => {
      this.logText.text += "\n" + text;
      clearTimeout(window.logTimeout);
      window.logTimeout = setTimeout(() => {
        this.logText.text = ''; 
      }, 3000);
    }
    // End Debug purposes
  }

  Food(quantity) {
    this.food += quantity;
    this.foodText.text = "Food: " + Math.floor(this.food);
  }

  Kill(quantity) {
    this.Food(this.playerStats.FoodPerKill * quantity);
    this.Gold(this.playerStats.GoldPerKill * quantity);
    this.Experience(this.playerStats.ExperiencePerKill * quantity);
    
    this.kills += quantity;
    this.killText.text = this.kills;
  }

  Gold(quantity) {
    this.gold += quantity;
    this.goldText.text = "Gold: " + Math.floor(this.gold);
  }

  Experience(quantity) {
    this.experience += quantity;
    if (this.experience >= this.experienceNextLevel) {
      this.LevelUp();
    }
  }

  LevelUp() {
    this.experienceNextLevel *= 2;
    this.experience = 0;
    this.skillPoints++;
  }

  update() {
    this.population = this.army.GetPopulation();

    if (this.skillPoints > 0 && !this.lvlupButton.visible) {
      this.lvlupButton.visible = true;
    } 
    else if (this.skillPoints === 0 && this.lvlupButton.visible) {
      this.lvlupButton.visible = false;
    }
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.attackButton, 32, 32)
    }
  }  
}