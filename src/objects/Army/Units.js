import { UnitBase } from './UnitBase';

export class Generic extends UnitBase {
  constructor(state, unit) {
    super(state, unit);
  }
}

export class Farmer extends UnitBase {
  constructor (state, unit) {
    super(state, unit);
  }
}

export class Archer extends UnitBase {
  constructor (state, unit) {
    super(state, unit);
  }
}

export class Footman extends UnitBase {
  constructor (state, unit) {
    super(state, unit);
  }

  Activity() { 
    if (this.unit.Stats.ChanceToDie >= this.state.rnd.integerInRange(0, 100))
      super.Die();
    else 
      super.Activity();
  }
}
