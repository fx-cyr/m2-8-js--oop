// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
  constructor(name, bread) {
    this.name = name;
    this.bread = bread;
    this.species = "cat";
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 100;
  } // Add code here

  sleep = (hours) => {
    this.tiredness = this.tiredness - hours * 5;
    this.happiness = this.happiness + hours * 2;
  };

  eat = (kibblesAmount) => {
    this.hunger = this.hunger - kibblesAmount * this.hunger * 0.2;
    this.happiness = this.happiness + kibblesAmount;
  };

  play = (minutes) => {
    this.loneliness = this.loneliness - minutes * 3;
    this.happiness = this.happiness + minutes * 10;
  };

  wait = (minutes) => {
    this.tiredness = this.tiredness + minutes * 2;
    this.hunger = this.hunger + minutes * 3;
    this.loneliness = this.loneliness + minutes * 5;
    this.happiness = this.happiness - minutes * 3;
  };
}

// B) Make Boots wait 20 minutes and call then console.log(boots);

let boots = new Cat("Boots", "Simaese cat");
boots.sleep(5);
boots.eat(3);
boots.play(15);
boots.wait(20);

console.log(boots);
