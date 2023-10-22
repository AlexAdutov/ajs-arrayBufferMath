import StonedCharacter from './stonedCharacter';

export default class Daemon extends StonedCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
