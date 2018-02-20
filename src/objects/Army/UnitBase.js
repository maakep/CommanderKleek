export class UnitBase {
  constructor (state, unit) {
    this.state = state;
    this.unit = unit;
    this.stats = unit.Stats;
    this.ticksWithoutFood = 0;

    this.loop = state.time.events.loop(this.stats.ActivityCooldown().Value * 1000, this.Activity, this);
  }

  Activity() {
    if (this.state.food >= -this.stats.FoodPerActivity().Value 
    && this.state.gold >= -this.stats.GoldPerActivity().Value) {
      this.DoActivity();
    } else {        
      this.ticksWithoutFood++;
      if (this.ticksWithoutFood > 10) {
          this.Die();
      }
    }
  }

  DoActivity() {
    this.state.Food(this.stats.FoodPerActivity().Value);
    this.state.Gold(this.stats.GoldPerActivity().Value);
    this.state.Kill(this.stats.KillsPerActivity().Value);
    this.ticksWithoutFood = 0;
  }

  Die() {
    this.state.time.events.remove(this.loop);
    this.unit.Owned.splice(this.unit.Owned.array.indexOf(this), 1);
  }
}   