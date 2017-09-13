const readlineSync = require('readline-sync');

let board = [];

class Tile{
    costructor(string, num){
        this.str = string;
        this.num = num;
    }
}


class Player{
    constructor(word){

        (function vallidateWord(word){

        })();

        let _word = word;
        
        this.printBoard = () => {};

        //returns a tile on a given grid number
        this.getTile = num => {};

        this.recieveTile = (tile) => {};

        this.giveTile = (num, player) => {};

        this.guessWord = player => {};

        this.takeTurn = () => {};

    }
}

function initBoard(word){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVW'.split("").push("XY").push('Z');


    let k = 0;

    board.push(word);

    for(let i = 0; i<5; i++)alphabet.splice(alphabet.indexOf(word[i]), 1);

    for(let i=0; i<5; i++){
        let row = [];
        for(let j=1; j<5; j++){
           
        }
        board.push(row);
    }
}

function printBoard(){
    let str = ""
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            str+= board[i][j] + '|';
        }
        str+="\n";
    }
    console.log(str);
}

function setWord(word){
    let wrdArr = word.slice("").sort();
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    while(wrdArr.length > 0){
        if(indexOf(wrdArr.splice(0, 1) < 1))return 0;
        
    }

}

function main(){

    let p1 = new Player();
    let p2 = new Player();



    return 0;
}

main();