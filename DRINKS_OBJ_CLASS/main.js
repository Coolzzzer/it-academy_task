<<<<<<< HEAD
const display = document.querySelector(".display");

<<<<<<< HEAD
class ObjStorageFunc{
	constructor(){
		this.obj = {};
	}
  addValue(key, value) {
    this.obj[key] = value;
    return this.obj[key];
  }
  getValue(key) {
		return this.obj[key];
	};
  deleteValue(key) { 
    if (!this.obj[key]) {
      return false;
    } else {
      delete this.obj[key];
      return true;
    }
=======
function ObjStorageFunc() {
  const self = this;
  const obj = {};

  self.addValue = function(key, value) {
    obj[key] = value;
    return obj[key];
>>>>>>> fa4d4a2e8f6973eb2d9e110586eb0482b4f199e5
  };
  self.getValue = function(key) {
		return obj[key];
	};
  self.deleteValue = function(key) { 
		if(key in obj){
			delete obj[key];
			return true;
		}
			return false;
  };

  self.getKeys = function() {
    return Object.keys(obj);
  };
}

let drinkStorage = new ObjStorageFunc();
let drink = {};
function add() {
  let key = prompt("Введите название напитка"), value = {
		name: key,
		isAlco: confirm("Алкогольный?") ? "Да" : "Нет",
		recept: prompt("Рецепт приготовления")	
	};
  drinkStorage.addValue(key, value);
}
function getV(){
	let key = prompt("Называние напитка");
	drink = drinkStorage.getValue(key);
	if(drink){
		return display.innerHTML =(`
			<br> Называние напитка: ${drink.name}
			<br> Алкогольный: ${drink.isAlco}
			<br> Рецепт приготовления: ${drink.recept}`)
	}else if(!drink){
		return display.innerHTML =("Нет такого напитка!");
}
}
function delV(){
	let key = prompt("Называние напитка");;
	return display.innerHTML = drinkStorage.deleteValue(key) ? "Удалено" : "Нет такого напитка!";
}
function getK(){
	return display.innerHTML = drinkStorage.getKeys();
}
=======
const display = document.querySelector(".display");

function ObjStorageFunc() {
  const self = this;
  const obj = {};

  self.addValue = function(key, value) {
    obj[key] = value;
    return obj[key];
  };
  self.getValue = function(key) {
		return obj[key];
	};
  self.deleteValue = function(key) { 
    if (!obj[key]) {
      return false;
    } else {
      delete obj[key];
      return true;
    }
  };

  self.getKeys = function() {
    return Object.keys(obj);
  };
}

let drinkStorage = new ObjStorageFunc();
let drink = {};
function add(storage) {
  let key = prompt("Введите название напитка"), value = {
		name: key,
		isAlco: confirm("Алкогольный?") ? "Да" : "Нет",
		recept: prompt("Рецепт приготовления")	
	};
  storage = drinkStorage.addValue(key, value);
}
function getV(storage){
	let key = prompt("Называние напитка");
	drink = drinkStorage.getValue(key);
	if(drink){
		return storage = display.innerHTML =(`
			<br> Называние напитка: ${drink.name}
			<br> Алкогольный: ${drink.isAlco}
			<br> Рецепт приготовления: ${drink.recept}`)
	}else if(!drink){
		return storage = display.innerHTML =("Нет такого напитка!");
}
}
function delV(storage){
	let key = prompt("Называние напитка");;
	storage = drinkStorage.deleteValue(key) ? "Удалено" : "Нет такого напитка!";
	return display.innerHTML = storage;
}
function getK(storage){
	return storage = display.innerHTML = drinkStorage.getKeys();
}
>>>>>>> c460a840551169e0a899dde805f74068102af0ce
