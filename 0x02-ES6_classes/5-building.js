export default class Building {
  constructor(sqrt) {
    this.sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqrt must be a number');
    }
    this._sqrt = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
