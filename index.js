class Character {
	constructor(speed) {
		this.speed = speed;
	}

	move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
}

class Enemy extends Character {
	constructor(power, speed) {
		super(speed);
		this.power = power;
	}
	attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Robot extends Enemy {
	constructor(name, phrase, power, speed) {
		super(power, speed);
		this.species = "robot";
		this.name = name;
		this.phrase = phrase;
	}
	transform = () => console.log("Optimus prime!");
	sayPhrase = () => console.log(this.phrase);
}

class Alien extends Enemy {
	#birthYear;

	constructor(name, phrase, power, speed, birthYear) {
		super(power, speed);
		this.species = "alien";
		this.name = name;
		this.phrase = phrase;
		this.#birthYear = birthYear;
	}
	fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
	sayPhrase = () => console.log(this.phrase);
	howOld = () => console.log(`I was born in ${this.#birthYear}`);
}

const robot1 = new Robot("Tito", "I can cook, swim and dance!", 15, 10);
const alien1 = new Alien("Ali", "I'm alien", 10, 25, 1500);

// robot1.attack()

// console.log(alien1);

// const test = (testName) => console.log(`${testName} can eat your mom`);
// test(robot1.name);

class Phone {
	constructor(number, model, weight) {
		this.number = number;
		this.model = model;
		this.weight = weight;
	}
	reciveCall = (name) => console.log(`${name} is call`);
	getNumber = () => console.log(this.number);
}

const phone1 = new Phone(123, "nokia", 100);
const phone2 = new Phone(456, "lg", 101);
const phone3 = new Phone(789, "sams", 102);

// phone1.reciveCall("pidor");
// phone1.getNumber();

class Square {
	constructor(num) {
		this.width = num;
		this.height = num;
	}
	get test() {
		return this.width * this.height;
	}
	set test(num) {
		this.width = Math.sqrt(num);
		this.height = this.width;
	}
}

const square1 = new Square(2);
console.log(square1.test);

square1.test = 25;
console.log(square1.width);
