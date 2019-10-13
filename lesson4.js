    // ******************* First Task **********************

// let number = prompt('Enter number from 0 to 999');
// let numObject = {};

// function makeObject(num){
//     if(num.length == 3){
//         numObject = {
//             hundreds: num[0],
//             decades: num[1],
//             units: num[2]
//         }
//         return console.log(numObject);
//     }else if(num.length == 2){
//         numObject = {
//             decades: num[0],
//             units: num[1]
//         } 
//         return console.log(numObject);
//     }else{
//         numObject = {
//             units: num
//         }   
//         return console.log(numObject);
//     }
    
// }

// if(number > 999){
//     console.log('The wrong number');
//     console.log(numObject);
    
// }else{
//     makeObject(number);
// }


const settings = {
    rows: 10,
    cols: 10,
    startPositionX: 0,
    startPositionY: 0
}
const player = {
    x: null,
    y: null,

    init(startX, startY){
        this.x = startX;
        this.y = startY;
    },
// Добавлены условия, чтобы игрок не выходил за рамки поля
    move(direction){
        switch (direction){
            case 2: 
                if(this.y == 9){
                    alert('Ohh, border');
                    break;
                } else{
                    this.y++;
                    break;
                }
            case 4:
                if(this.x == 0){
                    alert('Ohh, border');
                    break;
                }else{
                    this.x--;
                    break;
                }
            case 6:
                if(this.x == 9){
                    alert('Ohh, border');
                    break;
                }else{
                    this.x++;
                    break;
                }
            case 8:
                if(this.y == 0){
                    alert('Ohh, border');
                    break;
                }else{
                    this.y--;
                    break;
                }
        }
    }
};

const game = {
    settings,
    player,
    stepInfo: [], //Массив, который записывает ходы и выводит при введении 0

    startGame(){
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();
            this.stepInfo.push(direction);

            if(direction == -1){
                return alert('Goodbuy');
            }else if(direction == 0){
                return console.log(this.stepInfo);
            }else {
                this.player.move(direction);
            }
        }
    },

    render(){
        let map = '';

        for(let i = 0; i < this.settings.rows; i++){
            for(let j = 0; j < this.settings.cols; j++){
                if(this.player.y === i && this.player.x === j){
                    map += 'o '
                }else{
                    map += 'x '
                }
            }
            map += '\n'
        }
        console.clear();
        console.log(map);  
    },

    getDirection(){
        const availableDirection = [-1, 0, 2, 4, 6, 8];

        while(true){
            const direction = parseInt(prompt('Enter where you want go or 0 to know your steps: '));
            if(!availableDirection.includes(direction)){
                alert(`For moving enter one of the numbers: ${availableDirection.join(', ')}`);
                continue;
            }
            return direction;
        }
    }

}

game.startGame();