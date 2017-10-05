/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes (without syntactic sugar): GameObject, NPC, Humanoid

*/

/*
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'
*/

function GameObject(objectProperties) {
  this.createdAt = objectProperties.createdAt;
  this.dimensions = objectProperties.dimensions;
}

GameObject.prototype.destroy = function () {
  return 'Game object was removed from the game.';
};

/*
  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype
*/

function NPC(properties) {
  GameObject.call(this, properties);
  this.hp = properties.hp;
  this.name = properties.name;
}

NPC.prototype = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

/*
  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
*/

function Humanoid(properties) {
  NPC.call(this, properties);
  this.faction = properties.faction;
  this.weapons = properties.weapons;
  this.language = properties.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

// Inheritance Chain


/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:

  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'
*/

/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
