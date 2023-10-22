import StonedCharacter from './stonedCharacter';

export default class Magician extends StonedCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
