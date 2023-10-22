import Daemon from '../daemon';

test('Creation of Daemon', () => {
  expect(new Daemon('Ivan', 'Daemon', 10, 40, 100, 1)).toEqual({
    defence: 40,
    distance: 1,
    health: 100,
    level: 1,
    name: 'Ivan',
    setAttack: 10,
    type: 'Daemon',
  });
});

test("Checking Daemon's normal attack", () => {
  const character = new Daemon('Ivan', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Daemon attacks with distance of 4 squares', () => {
  const character = new Daemon('Ivan', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 4;
  expect(character.attack).toBe(70);
});

test('Stoned Daemon attacks at distance of 3', () => {
  const character = new Daemon('Ivan', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(72);
});

test('Daemon attacks < 0', () => {
  const character = new Daemon('Ivan', 'Daemon', 10, 40, 100, 1);
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test('Daemon stoned', () => {
  const character = new Daemon('Ivan', 'Daemon', 10, 40, 100, 1);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});
