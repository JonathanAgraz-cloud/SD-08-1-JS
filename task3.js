export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level
    }
    info(){
      console.log(this.name + "has been reached level"+ this.level +"!");
    }
}
    const jugador1 = new Player("Tara", 6);
    jugador1.info();
  