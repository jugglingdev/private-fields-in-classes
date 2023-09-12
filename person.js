class Person {
  #id = Math.floor(Math.random() * 1000);

  get getID() {
    return this.#id;
  }

  set setID(id) {
    return this.#id = id;
  }
}


module.exports = Person;
