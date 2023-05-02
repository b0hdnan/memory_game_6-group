const board = document.querySelector(".board");
let persons = [
  {
    name: "Богдан Хмельницький \n JIIOOOOOOOOOO OIIII HIOHIH HIOHIOH IOIOIHIB IIHIOH GGOIHG",
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
		tile.setAttribute("id", i)
    tile.dataset.value = i;
    tile.style.backgroundImage = `url(./img/guess.png)`;
    tile.addEventListener("click", choose);
    tiles.push(tile);
  }
  tiles.forEach((tile) => board.appendChild(tile));
}

let chosen = [];

create();
let desc 
function choose() {
	if (chosen.length < 2 && this.dataset.value !== chosen[0]){
		this.classList.remove("border")
		this.classList.add("choosen")
		chosen.push(this.dataset.value)
		this.style.backgroundImage = `url(${persons[this.dataset.value].img})`
		console.log(chosen)
    console.log(`url(${persons[this.dataset.value].img})`)
    desc = (persons[this.dataset.value].name)
    
	}
	if (chosen.length === 2){
		setTimeout(check, 1000)
	}
}

function check(){
	if(persons[chosen[0]].name === persons[chosen[1]].name){
		tiles[chosen[0]].style.visibility = "hidden"
		tiles[chosen[1]].style.visibility = "hidden"
    chosen = [] 
    clearInterval(Interval); // 2 card and stop
    console.log(r++)
    console.log(desc)
       

    if (r == 13){           // no cards
  console.log("WIN !")
  clearInterval(Interval);
}

	 }
	 else{
		tiles[chosen[0]].classList.remove("choosen")
		tiles[chosen[0]].classList.add("border")
		tiles[chosen[1]].classList.remove("choosen")
		tiles[chosen[1]].classList.add("border")
		tiles[chosen[0]].style.backgroundImage = `url(./img/guess.png)`;
		tiles[chosen[1]].style.backgroundImage = `url(./img/guess.png)`;
	  chosen = []
	 }
}

let r = 1






  let min = 00; 
  let sec = 00; 
  let appendSec = document.getElementById("sec") // ok
  let appendMin = document.getElementById("min") // ok
  let start_t = document.querySelector(".board") // ok
  let stop_t = document.getElementById('stop');  // ok
  let reset_t = document.getElementById('reset'); // ok
  let Interval ;




  start_t.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }
  
    stop_t.onclick = function() {
       clearInterval(Interval);
  }
  

  reset_t.onclick = function() {
     clearInterval(Interval);
    sec = "00";
  	min = "00";
    appendSec.innerHTML = sec;
  	appendMin.innerHTML = min;
  }
  
   
  
  function startTimer () {
    sec++; 
    
    if(sec <= 9){
      appendSec.innerHTML = "0" + sec;
    }
    
    if (sec > 9){
      appendSec.innerHTML = sec;
      
    } 
    
    if (sec > 59) {
      min++;
      appendMin.innerHTML = "0" + min;
      sec = 0;
      appendSec.innerHTML = "0" + 0;
    }
    
    if (min > 9){
      appendMin.innerHTML = min;
    }
  
  }
  

//jjj

function soundClick() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '/mp/apovabin-around-the-phonk.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}


/*let audio = new Audio();
audio.volume = .25; // Чтобы не испугать пользователя

document.querySelector('#play').addEventListener('click', function(e){
  if(e.target.value === 'Воспроизвести') {
    e.target.value = 'Остановить';
    audio.src = e.target.getAttribute('data-url');
    audio.play();
  } else {
    e.target.value = 'Воспроизвести';
    audio.currentTime = 0;
    audio.pause();
  }
});
*/

