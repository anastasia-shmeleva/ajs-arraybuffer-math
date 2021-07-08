/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
export class MathChar {
  constructor() {
    this.basicStoned = false;
  }

  set newStoned(value) {
    this.stoned = Boolean(value);
  }

  get newStoned() {
    return this.stoned;
  }

  set newAttack(distance) {
    const attackReduce = this.basicAttack * 0.1 * (distance - 1);
    if (this.stoned === true) {
      this.attack = Math.round(this.basicAttack - attackReduce - Math.floor(Math.log2(distance) * 5));
    } else {
      this.attack = Math.round(this.basicAttack - attackReduce);
    }
  }

  get newAttack() {
    return this.attack <= 0 ? 0 : this.attack;
  }
}

export class Magician extends MathChar {
  constructor() {
    super();
    this.health = 100;
    this.basicAttack = 100;
    this.defence = 40;
  }
}

export class Deamon extends MathChar {
  constructor() {
    super();
    this.health = 100;
    this.basicAttack = 90;
    this.defence = 40;
  }
}
