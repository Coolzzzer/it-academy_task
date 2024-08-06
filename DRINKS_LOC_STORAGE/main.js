const display = document.querySelector(".display");

class LocStorageClass{
  constructor(storageKey) {
    this.obj = {};
    this.storageKey = storageKey;
    this.loadFromLocalStorage();
  }
  loadFromLocalStorage() {
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      this.obj = JSON.parse(storedData);
    }
  }
  saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.obj));
  }
  addValue(key, value) {
    this.obj[key] = value;
    this.saveToLocalStorage();
  }
	getValue(key) {
    return this.obj[key];
  }
  deleteValue(key) {
		if (!this.obj[key]) {
			this.saveToLocalStorage()
      return false;
    } else {
      delete this.obj[key];
      return true;
    }
  }
	getKeys() {
    return Object.keys(this.obj);
  }
}

let drinkStorage = new LocStorageClass('drinks');
let dishStorage = new LocStorageClass('dishes');

function addDrink() {
  let key = prompt("Введите название напитка");
  let value = {
    name: key,
    isAlco: confirm("Алкогольный?") ? "Да" : "Нет",
    recept: prompt("Рецепт приготовления")
  };
  drinkStorage.addValue(key, value);
}

function getDrink() {
  let key = prompt("Название напитка");
  let drink = drinkStorage.getValue(key);
  if (drink) {
    display.innerHTML = (`
      <br> Название напитка: ${drink.name}
      <br> Алкогольный: ${drink.isAlco}
      <br> Рецепт приготовления: ${drink.recept}`);
  } else {
    display.innerHTML = ("Нет такого напитка!");
  }
}

function deleteDrink() {
  let key = prompt("Название напитка");
  display.innerHTML = drinkStorage.deleteValue(key) ? "Удалено" : "Нет такого напитка!";
}

function listDrinks() {
  display.innerHTML = drinkStorage.getKeys().join(', ');
}

function addDish() {
  let key = prompt("Введите название блюда");
  let value = {
    name: key,
    ingredients: prompt("Ингредиенты"),
    recept: prompt("Рецепт приготовления")
  };
  dishStorage.addValue(key, value);
}

function getDish() {
  let key = prompt("Название блюда");
  let dish = dishStorage.getValue(key);
  if (dish) {
    display.innerHTML = (`
      <br> Название блюда: ${dish.name}
      <br> Ингредиенты: ${dish.ingredients}
      <br> Рецепт приготовления: ${dish.recept}`);
  } else {
    display.innerHTML = ("Нет такого блюда!");
  }
}

function deleteDish() {
  let key = prompt("Название блюда");
  display.innerHTML = dishStorage.deleteValue(key) ? "Удалено" : "Нет такого блюда!";
}

function listDishes() {
  display.innerHTML = dishStorage.getKeys().join(', ');
}

document.querySelector("#addDrink").addEventListener("click", addDrink);
document.querySelector("#getDrink").addEventListener("click", getDrink);
document.querySelector("#deleteDrink").addEventListener("click", deleteDrink);
document.querySelector("#listDrinks").addEventListener("click", listDrinks);

document.querySelector("#addDish").addEventListener("click", addDish);
document.querySelector("#getDish").addEventListener("click", getDish);
document.querySelector("#deleteDish").addEventListener("click", deleteDish);
document.querySelector("#listDishes").addEventListener("click", listDishes);