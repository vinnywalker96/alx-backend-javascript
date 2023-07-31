export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;

    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
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
  evacuationWarningMessage(){
    return '';
  }
}
