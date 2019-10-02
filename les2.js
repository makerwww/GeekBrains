// ************************* First Task **************************

// var a = 1, 
//     b = 1, 
//     c, d;

//c = ++a; alert(c);  ||| 2 -- Сначала идёт инкремент(т.е. число сначала увеличивается), а затем присваивание
//d = b++; alert(d);  ||| 1 -- Сначала присваивание, затем увеличение
//c = (2+ ++a); alert(c);  ||| 5 -- 2 прибавляется к увеличенной а(было после предыдущей операции(строка 5) а = 2, теперь 3)
//d = (2+ b++); alert(d);  ||| 4 -- Сначала прибавление с b, после увеличение b(после строки 6 b = 2)
//alert(a);   ||| 3 -- После строки 7, а = 3
//alert(b);   ||| 3 -- после строки 8, b = 3

// ************************* Second Task **************************

// var a = 2
// var x = 1 + (a *= 2) x = 5, т.к. сначала выполняется выражение в скобках(a = a * 2(4)), затем идет сложение

// ************************* Task 3.1,2,3 **************************

var a = 5,
    b = 2;

function calc(a,b){
    if(a >= 0 && b >= 0){
        return a - b;
    } else if(a < 0 && b < 0){
        return a*b;
    } else if((a >= 0 && b < 0) || (a < 0 && b >= 0)){
        return a+b;
    }
}
console.log(calc(4,2));
console.log(calc(-5,-2));
console.log(calc(-4,2));


// *************************** Task four *******************
var firstNum = prompt("Enter number from 0 to 15: ");

function logNumbers(number){
    for(number; number < 16; number++){
        console.log(number);
    }
}

    switch(firstNum){
        case '1':
            logNumbers(firstNum);
            break;
        case '2':
            logNumbers(firstNum);
            break;
        case '3':
            logNumbers(firstNum);
            break;
        case '4': 
            logNumbers(firstNum);
            break;
        case '5': 
            logNumbers(firstNum);
            break;
        case '6': 
            logNumbers(firstNum);
            break;
        case '7':
            logNumbers(firstNum);
            break;
        case '8':
            logNumbers(firstNum);
            break;
        case '9':
            logNumbers(firstNum);
            break;
        case '10': 
            logNumbers(firstNum);
            break; 
        case '11': 
            logNumbers(firstNum);
            break;   
        case '12':
            logNumbers(firstNum);
            break;
        case '13':
            logNumbers(firstNum);
            break;  
        case '14':
            logNumbers(firstNum);
            break;
        case '15': 
            logNumbers(firstNum);
            break;
        default:
            alert("Something wrong");
            break;
    }

// ***************************** Task five ******************************

var summary = (a,b) => {return a+b}
var diff = (a,b) => {return a - b}
var multyplic = (a,b) => {return a*b}
var division = (a,b) => {return a/b}

//******************************Task six *******************************

function mathOperation(val1, val2, operation){
    let res = 0;
    switch (operation) {
        case '+':
            res = summary(val1, val2);
            break;
        case '-':
            res = diff(val1, val2);
            break;
        case '*':
            res = multyplic(val1, val2);
            break;
        case '/':
            res = division(val1, val2);
            break;
        default:
            break;
    }
    return res;
}

// *************************** Pow Task **************************

function power(val, pow){
    if(pow == 1){
        return (val);
    }else {return val * power(val, pow - 1);}
}




