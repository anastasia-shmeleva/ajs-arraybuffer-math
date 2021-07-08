/* eslint-disable no-undef */
import { Deamon, Magician } from '../js/players';

test('Deamon', () => {
  expect(new Deamon()).toEqual({
    basicStoned: false, health: 100, basicAttack: 90, defence: 40,
  });
});

test('Magician', () => {
  expect(new Magician()).toEqual({
    basicStoned: false, health: 100, basicAttack: 100, defence: 40,
  });
});

test('set stoned', () => {
  expect(new Deamon().newStoned = true).toBe(true);
});

test('get stoned', () => {
  const deamon = new Deamon();
  deamon.newStoned = true;
  expect(deamon.newStoned).toBe(true);
});

test('set attack with stoned false', () => {
  const magician = new Magician();
  magician.newAttack = 2;
  expect(magician.attack).toBe(90);
});

test('set attack with stoned true', () => {
  const magician = new Magician();
  magician.newStoned = true;
  magician.newAttack = 3;

  expect(magician.attack).toBe(73);
});

test('get attack', () => {
  const magician = new Magician();
  magician.newAttack = 3;
  expect(magician.newAttack).toBe(80);
});

test('get attack 0', () => {
  const magician = new Magician();
  magician.newAttack = 100;
  expect(magician.newAttack).toBe(0);
});
