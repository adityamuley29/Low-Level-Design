interface EnemyPrototype {
  clone(): EnemyPrototype;
}

class Enemy implements EnemyPrototype {
  private type: string;
  private health: number;
  private speed: number;
  private armored: boolean;
  private weapon: string;

  constructor(
    type: string,
    health: number,
    speed: number,
    armored: boolean,
    weapon: string
  ) {
    this.type = type;
    this.health = health;
    this.speed = speed;
    this.armored = armored;
    this.weapon = weapon;
  }
  clone(): Enemy {
    return new Enemy(
      this.type,
      this.health,
      this.speed,
      this.armored,
      this.weapon
    );
  }

  setHealth(health: number): void {
    this.health = health;
  }

  printStats(): void {
    console.log(
      `${this.type} [Health: ${this.health}, Speed: ${this.speed}, Armored: ${this.armored}, Weapon: ${this.weapon}]`
    );
  }
}

/**
 * Example without prototype regustry
 */

// const enemy = new Enemy("FlyingEnemy", 100, 12.0, false, "Laser");
// enemy.printStats();

// const enemyClone = enemy.clone();
// enemyClone.setHealth(80);
// enemyClone.printStats();

class EnemyRegistry {
  private prototypes: Map<string, Enemy> = new Map();

  register(key: string, prototype: Enemy) {
    this.prototypes.set(key, prototype);
  }

  get(key: string) {
    const prototype = this.prototypes.get(key);

    if (prototype !== undefined) {
      return prototype.clone();
    }

    throw new Error(`No prototype registered for: ${key}`);
  }
}

/**
 * Example with prototype registry
 */
class Game {
  static main(): void {
    const registry = new EnemyRegistry();

    // Register prototype enemies
    registry.register(
      "flying",
      new Enemy("FlyingEnemy", 100, 12.0, false, "Laser")
    );
    registry.register(
      "armored",
      new Enemy("ArmoredEnemy", 300, 6.0, true, "Cannon")
    );

    // Clone from registry
    const e1 = registry.get("flying");
    const e2 = registry.get("flying");
    e2.setHealth(80); // maybe this one was spawned with less HP

    const e3 = registry.get("armored");

    // Print stats to verify
    e1.printStats();
    e2.printStats();
    e3.printStats();
  }
}

Game.main();
