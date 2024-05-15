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
