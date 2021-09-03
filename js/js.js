let numbers = [0*16];


let text = document.querySelector(".text");
let cells;
let p;
let field = document.querySelector("#field");

let result_game = 0;

StartGame = document.querySelector('.Start_game');

function creating_game_cells(){
	let cells = new DocumentFragment();
	for(let i = 0; i < 16; i++){
		let div = document.createElement('div');
		div.className = "game_cell";
		let p = document.createElement("p")
		let back = document.createElement("div")
		back.hidden = true;
		back.className = "background";
		numbers[i] = getRandomIntForfield();
		p.innerHTML = numbers[i];
		div.append(p);
		div.append(back);
		cells.append(div);
	}
	window.field.append(cells);
}

const findBacks = () =>{
	backs = document.querySelectorAll(".background");
}
const find_p = () =>{
	p = document.querySelectorAll("p");
}
const findCells = () =>{
	cells = document.querySelectorAll(".game_cell");
}

function getRandomIntForfield(RandomInt) {
	let result;
  	let min = Math.ceil(0);
  	let max = Math.floor(10);
  	result = Math.floor(Math.random() * (max - min)) + min;
  	return result
}

function filling_in_the_field(){
	for(let i = 0; i < 16; i++){
		numbers[i] = getRandomIntForfield();
		p[i].innerHTML = numbers[i];
	}
}

const setStartHandler = (selector) => {
	const StartGame = selector;
	StartGame.onclick = (e) => {
		for (let i = 0; i < 16; i++){
			backs[i].hidden = false;
		}
		StartGame.innerHTML = "Заново";
		if (result_game == 1) {

			filling_in_the_field();

			for (let i = 0; i < 16; i++){
				backs[i].hidden = true;
				cells[i].style.backgroundColor = "white";

			}

			StartGame.innerHTML = "Начать!";
			text.innerHTML = "Перед тем как увидеть задание нажмите \"Начать!\"";
			result_game = 0;

		}
		else result_game = game();
		}
}


function Game_number(){
	let game_number = 0;
	let check = 0;
	while (check == 0){
		game_number = getRandomIntForfield();
		for (let i = 0; i < 16; i++){
			if (numbers[i] == game_number) {
				check = 1;
			}
		}
	}
	return game_number;
}

const lose = (i) => {
	let count = 0;
	cells[i].style.backgroundColor = "red";
	cells[i].style.borderColor = "red";
	backs[i].hidden = true;
	text.innerHTML = "Вы проиграли, поробуйте еще раз!";
	backs.forEach((el, index)=> {
	el.onclick = undefined;
	})
	return count;
}

const win = (text) =>{
	text.innerHTML = "Поздравляем, вы победили!";
	backs.forEach((el, index)=> {
		el.onclick = undefined;
	})
}

function Count(Game_number){
	let count = 0;
	for (let i = 0; i < 16; i++){
		if (numbers[i] == Game_number) count++;
	}
	return count;
}

function game(){
	let game_number = 0;
	let result_game = 1;
	let count = 0;

	count = Count(game_number);
	game_number = Game_number();
	text.innerHTML = "Игра началась! Найди все числа " + game_number;
	for (let i = 0; i < 16; i++){
		backs[i].onclick = (e) => {
			if (numbers[i] == game_number){
				backs[i].hidden = true;
				cells[i].style.backgroundColor = "green";
				cells[i].style.borderColor = "green";
				count--;
				if (count == 0){
					win(text);
				}
			}
			else{
				count = lose(i);
			}
		}
	}
	return result_game;
}



const start = () => {
	result_game = 0;
	creating_game_cells();
	findBacks();
	find_p();
	findCells();
	setStartHandler(StartGame);

}

start();