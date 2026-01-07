export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level
    }
    info(){
      console.log(this.name + " has been reached level "+ this.level +"!");
    }
    levelUp(){
      this.level = this.level + 2;
    }
}
    const jugador1 = new Player("Tara", 6);
    jugador1.levelUp();
    jugador1.info();

  