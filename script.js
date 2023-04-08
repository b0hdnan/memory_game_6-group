const board = document.querySelector(".board");
let persons = [
  {
    name: "Богдан Хмельницький",
    img: "./img/Bogdan_Hmelnitski.jpg"
  },
  {
    name: "Йосиф Сліпий",
    img: "./img/yosif.png"
  },
  {
    name: "Тарас Шевченко",
    img: "./img/taras_shevchenko.png"
  },
  {
    name: "Павло Тетеря",
    img: "./img/Pavlo_Teteri.jpg"
  },
  {
    name: "Іван Франко",
    img: "./img/ivan_franko.png"
  },
  {
    name: "Олесь Гончар",
    img: "./img/oles.png"
  },
  {
    name: "Василь Стус",
    img: "./img/vasil.png"
  },
  {
    name: "В’ячеслав Чорновіл",
    img: "./img/vyacheslav.png"
  },
  {
    name: "Іван Дзюба",
    img: "./img/ivan.png"
  },
  {
    name: "Іван Сірко",
    img: "./img/Ivan_Sirko.png"
  },
  {
    name: "Петро Григоренко",
    img: "./img/petr.png"
  },
  {
    name: "Іван Миколайчук",
    img: "./img/ivanm.png"
  }
];
let tiles = [];

function double(arr) {
  return [...arr, ...arr];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

persons = double(persons);
persons = shuffle(persons);

function create() {
  for (let i = 0; i < persons.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.classList.add("border");
    tile.dataset.value = i;
    tile.style.backgroundImage = `url(./img/guess.png)`;
    tile.addEventListener("click", choose);
    tiles.push(tile);
  }
  tiles.forEach((tile) => board.appendChild(tile));
}

let chosen = [];

create();

function choose() {
  this.classList.remove("border")
	this.classList.add("choosen")
}

