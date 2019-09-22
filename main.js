// First task

var TempC;
var CTempVal = document.getElementById('tempValue');
var result = document.querySelector('.result');

function fromCelToFah(TempC){
    return((9/5)*TempC + 32);
}

CTempVal.onchange = function(){
    var TempVal = CTempVal.value;
    result.innerHTML = fromCelToFah(TempVal)+" "+"Фаренгейт(a)";
}

// Second Task 

var name = "Василий"
var admin = name;

alert("Имя "+admin);

// Third Task
console.log(1000 + '108');
