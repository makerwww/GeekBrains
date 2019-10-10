
    // **************** Log of simple numbers from 0 to 100 *********
    /*
let num = 0;
let res = 0;
let count = 0;

while(num < 101){
    if(num == 1){
        console.log(num);
        
    }else {
        for(let i = 0; i < num; i++){
            res = num % i;
            if(res == 0){
                count++;
            } continue;
        }
    }
    if(count == 1){
        console.log(num);  
    }
    num++;
    count = 0;
}
*/

var item_1 = {
    name: 'pen',
    price: 20,
    count: 3
}
var item_2 = {
    name: 'pencil',
    price: 5,
    count: 10
}
var item_3 = {
    name: 'erase',
    price: 15,
    count: 2
}

var basket = [];

basket.splice(0, 0, item_1,item_2,item_3);
console.log(basket);

function countBasketPrice(arr){
    let fullPrice = 0;
    arr.forEach((item) => {
        fullPrice += item.price;
    });
    return fullPrice;
}


    // ************ Task four | for without body ***************

// for(var i = 0; i<10; console.log(i), i++){}



    // ************** Task five| Pyramid made of x **************

// for(let i = 0; i < 21; i++){
//     for(let j = 0; j < i; console.log('x'), j++){}
//     console.log('');
// }