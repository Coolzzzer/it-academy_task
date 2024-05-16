const display = document.querySelector(".display");

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
  };
  getKeys() {
    return Object.keys(this.obj);
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