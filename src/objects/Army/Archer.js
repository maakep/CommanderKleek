export default class {
  constructor (state) {
    this.killsPerHit = 1;
    this.hungerPerHit = 1;

    
    this.state = state;
    this.ticksWithoutFood = 0;

    state.time.events.loop(Phaser.Timer.SECOND, this.Hit, this);
  }

  Hit() {
    if (this.state.food >= this.hungerPerHit) {
      this.state.Food(-this.hungerPerHit);
      this.state.Kill(this.killsPerHit);
      this.ticksWithoutFood = 0;
    } else {
      this.ticksWithoutFood++;
      if (this.ticksWithoutFood > 3) {
        // TODO: I'm hungry. I should probably die. How do I die?
      }
    }
  }
}
