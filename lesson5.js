let d = document;

    // Функция для генерации шахматного поля
function renderBoard(){
    const boardDiv = d.querySelector('.game-board');
    const table = boardDiv.getElementsByTagName('table')[0];
    const rowNum = ['Game','1','2','3','4','5','6','7','8'];
    const colLetter = ['A','B','C','D','E','F','G','H'];

    for(let i = 0; i < 9; i++){
        let tr = d.createElement('tr');
        if(i == 0){
            for(let j = 1; j < 10; j++){
                let td = d.createElement('td');
                td.innerText = rowNum[j-1];
                td.style.cssText = 'width: 50px; height: 35px; text-align: center'
                tr.appendChild(td);
            }
        } else if(i%2 == 0){
            for(let j = 0; j < 9; j++){
                let td = d.createElement('td');
                if(j == 0){
                    td.innerText = colLetter[i-1];
                    td.style.cssText = 'width: 50px; height: 50px; text-align: center'
                }else if(j%2 != 0){
                    td.style.cssText = 'background: #000; width: 50px; height: 50px; border: 1px solid black;'
                    tr.appendChild(td);
                } tr.appendChild(td);
                
            }
        } else{
            for(let j = 0; j < 9; j++){
                let td = d.createElement('td');
                if(j == 0){
                    td.innerText = colLetter[i-1];
                    td.style.cssText = 'width: 50px; height: 50px; text-align: center'
                }else if(j%2 == 0){
                    td.style.cssText = 'background: #000; width: 50px; height: 50px; border: 1px solid black;'
                    tr.appendChild(td);
                } tr.appendChild(td);
                
            }
        }
        table.appendChild(tr);
    }
}

    //Лишняя функция для небольшого интерактива)
function getFunk(){
    let linkConsole = d.querySelector('a');
    linkConsole.addEventListener('click', () => {
        console.log('renderBoard()');
        console.log(renderBoard());
    });
}

getFunk();


// ********************** Part for Basket **************************
var item_1 = {
    id: 0,
    name: 'Ручка',
    price: 40,
    descript: 'Nice pen for writing'
}
var item_2 = {
    id: 1,
    name: 'Карандаш',
    price: 15,
    descript: 'Nice pencil to drawing'
}
var item_3 = {
    id: 2,
    name: 'Ластик',
    price: 25,
    descript: 'Good thing to delite pencil\'s track'
}
let catalog = d.querySelector('.goods');
let goodsArr = [item_1, item_2, item_3];
let basket = [];

// Функция для создания товаров на странице
function renderCatalog(){
    for(let i = 0; i < goodsArr.length; i++){
        let itemHeader = d.createElement('h3');
        itemHeader.innerText = goodsArr[i].name;
    
        let itemDescript = d.createElement('p');
        itemDescript.innerText = goodsArr[i].descript;
    
        let itemPrice = d.createElement('p');
        itemPrice.innerText = goodsArr[i].price + ' руб.'
    
        let goodsItem = d.createElement('div');
        goodsItem.classList.add('goods_item');
        catalog.appendChild(goodsItem);
        goodsItem.appendChild(itemHeader);
        goodsItem.appendChild(itemDescript);
        goodsItem.appendChild(itemPrice);
    
        let button = d.createElement('button');
        button.innerText = 'Add to Cart'
        goodsItem.appendChild(button);
    }
}

renderCatalog();

// Добавление товаров в корзину и вывод информации
let buttons = catalog.getElementsByTagName('button'); //Коллекция кнопок купить на товарах
let basketBox = d.querySelector('.basket-box'); //блок для корзины товаров

if(basket.length == 0){    //Проверка на пустоту корзины
    basketBox.innerText = 'Корзина пустая';
    addToBasket();
}

function addToBasket(){
    for(let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', (e) =>{
            let itemButton = e.target;
            let item = itemButton.parentElement.firstChild.innerText;
            // Добавление в корзину объектов товаров
            goodsArr.forEach(val => {
                if(item == val.name){
                    basket.push(val);
                }
            })
            let sumPrice = 0; //Для подсчета суммы товаров
            let itemCount = 0; //Для подсчета количества товаров
            
            //Обновление переменных и вывод текста в корзину
            basket.forEach(val => {
                sumPrice += val.price;
                itemCount++;

                basketBox.innerText = `В корзине ${itemCount} товаров на сумму ${sumPrice} рублей.`
            })
        })
    }  
}

function clearCart(){
        basket.splice(0, basket.length);
        basketBox.innerText = 'Корзина пустая';
        sumPrice = 0;
        itemCount = 0;
        console.log(basket);
}








