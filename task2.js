export class Player {
    constructor(name, level){
        this.name = name
        this.level = level
    }
}
const playerOnee = new Player("Jony", 100);
const playerTwoo = new Player("Erick", 82);
const playerThree = new Player("Memo", 74);

console.log(playerOnee);
console.log(playerTwoo);
console.log(playerThree);