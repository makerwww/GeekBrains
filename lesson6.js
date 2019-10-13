let d = document;

// Добавление товаров на страницу
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
var item_4 = {
    id: 3,
    name: 'Линейка',
    price: 30,
    descript: 'Ruler 30 sm in length'
}
var item_5 = {
    id: 4,
    name: 'Корректор',
    price: 50,
    descript: 'True white color'
}
var item_6 = {
    id: 5,
    name: 'Фломастер',
    price: 10,
    descript: '10 different colors'
}
let items = [item_1, item_2, item_3, item_4, item_5, item_6];

function renderCatalog(){
    let catalog = d.querySelector('.goods');
    for(let i = 0; i < items.length; i++){
        catalog.insertAdjacentHTML('beforeend', `
        <div class="goods_item">
            <h3>${items[i].name}</h3>
            <p>${items[i].descript}</p>
            <p>${items[i].price}</p>
            <button>Add to Cart</button>
        </div>
        `);
    }
}
renderCatalog();

let shopBasket = {
    basketBlock: d.querySelector('.basket__box'),
    basketList: d.querySelector('.basket__list'),
    clearButton: d.querySelector('.clear-button'),
    buyButtons: d.querySelectorAll('.goods_item button'),
    basketArr: [],

    addToBasket() {
        this.buyButtons.forEach((val) => {
            val.addEventListener('click', (e) => {
                let currItem = val.parentElement.firstElementChild.innerText;
                items.forEach((val,index) => {
                    if(currItem == val.name){
                        this.basketArr.push(items[index]);
                        this.showBasketList(val.name, val.price);
                    } 
                    
                })
            this.itemsSummary();
            this.clearBasket();
            })
        })
    },
    showBasketList(name,price) {
        if(this.basketArr.length == 0){
            this.basketList.classList.add('hidden');
            this.basketList.innerHTML = '';
        } else {
            this.basketList.classList.remove('hidden');
            this.basketList.insertAdjacentHTML('beforeend', 
            `
            <p class="basket__item-str">
                ${name} -- ${price} руб. 
            </p>
            `);
        }
    },
    itemsSummary() {
        let sumPrice = 0;
        let sumCount = 0;
        this.basketArr.forEach(val => {
            sumPrice += val.price;
            sumCount++;
        })
        this.basketMessage(sumCount, sumPrice);
    },
    clearBasket() {
        this.clearButton.addEventListener('click', () => {
            this.basketArr = [];
            this.basketBlock.innerText = 'Корзина пуста';
            this.basketList.innerHTML = '';
        })
    },
    basketMessage(count, price) {
        if(this.basketArr.length == 0){
            this.basketBlock.innerText = 'Корзина пуста';
        } this.basketBlock.innerText = `В корзине ${count} товаров на сумму ${price} руб.` ;
    },
    // basketInfo() {
    //     let countInfo = [];
    //     let count = 0;
        
    //     this.basketArr.forEach((val, index) => {
    //         // console.log(val);
    //         this.basketArr.forEach(val2 => {
    //             // console.log(val2);
    //             if(val == val2){
    //                 count++;
    //             }
    //         })
    //         countInfo[index] = `${val.name}: ${count}`;
    //         console.log(countInfo);
    //         countInfo.sort();
    //         console.log(countInfo);
            
    //         console.log(count);
    //         count = 0;
    //     })
    // }
}
shopBasket.addToBasket();