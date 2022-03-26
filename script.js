

    // ! Machine //

function Machine() {
 this.state = "stopped";
 this.time = 2000;
 this.timer = null;
 this.interval;
}

Machine.prototype.run = function() {
 this.state = "started";
 document.write("Начинаю работу...");
 this.interval = setInterval(function() {
     document.write(" | ");
 }.bind(this) ,1000);
 this.timer = setTimeout(this.onReady.bind(this), this.time);
};

Machine.prototype.onReady = function() {
 clearInterval(this.interval);
 clearTimeout(this.timer);
 this.state = "stopped";
 document.write(`Готово.`);
}

Machine.prototype.stop = function() {
 clearInterval(this.interval);
 clearTimeout(this.timer);
 this.state = "stopped";
 document.write("Принудительное выключение...");
}

  // ! Multivare //

function Multivare () {
    this.food = "гречка";
    Machine.apply(this);
}
Multivare.prototype = Object.create(Machine.prototype);
Multivare.prototype.constructor = Multivare;

Multivare.prototype.run = function(food) {
    if(food != undefined) {
 this.food = food;
    }
 document.write(`Приготовление: `+ " " + `${this.food}`+ ". ");
 Machine.prototype.run.apply(this);
};

 // ! Coffe Machine // 

function CoffeMachine() {
 this.drink = "Вода";
 Machine.apply(this);
}
CoffeMachine.prototype = Object.create(Machine.prototype);
CoffeMachine.prototype.constructor = CoffeMachine;

CoffeMachine.prototype.run = function(drink) {
    if(drink != undefined) {
 this.drink = drink;
    }
 document.write(`Приготовление: `+ " " + `${this.drink}`+ ". ");
 Machine.prototype.run.apply(this);
};

   // ! Other //

let machine = new Machine();
let coffeMachine = new CoffeMachine();
let multivare = new Multivare();
function coffee() {
let k = prompt("Введите название напитка:");
switch (k) {
 case "латте": coffeMachine.time = 7000;
     break;
 case "эспрессо": coffeMachine.time = 5000;
     break;
 case "американо": coffeMachine.time = 3000;
     break;
 default: alert("Такого напитка нет"); k = this.drink;
 break;
}
coffeMachine.run(k);
}
function multi() {
let k1 = prompt("Введите название блюда:");
switch (k1) {
    case "гороховый суп": multivare.time = 5000;
        break;
    case "каша": multivare.time = 3000;
        break;
    case "пицца": multivare.time = 8000;
        break;
    default: alert("Такого блюда нет"); k1 = this.food;
    break;
}
multivare.run(k1);
}