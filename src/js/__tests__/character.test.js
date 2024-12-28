import { displayCharacterHealth } from '../character'

test.each([
  [{name:'мечник', health:10}, 'critical'],
  [{name:'маг', health: 51}, 'healthy'],
  [{name:'лучник', health: 50}, 'wounded'],
])
('testing the displayCharacterHealth function character %o', (character, expected) => {
  const result = displayCharacterHealth(character);
  expect(result).toBe(expected);
});