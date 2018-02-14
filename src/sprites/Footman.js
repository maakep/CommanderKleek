export default class {
  constructor (state) {
    this.killsPerHit = 1;

    this.state = state;
    setInterval(() => {
      state.Kill(this.killsPerHit);
    }, 5000);
  }
}
