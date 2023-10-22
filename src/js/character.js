const heroes = ['Bowman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw Error('Name should be string');
    }

    if (typeof type !== 'string') {
      throw Error('Type should be string');
    }

    if (heroes.includes(type) !== true) {
      throw Error('Type should be one of this: Bowman, Daemon, Magician, Swordsman, Undead, Zombie');
    }

    if (name.length < 2 || name.length > 10) {
      throw Error('Name length should be between 2 and 10 letters');
    }
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("It's impossible to increase level of dead character");
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defense *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    }
  }
}
