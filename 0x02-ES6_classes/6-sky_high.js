import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    super(sqrt);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
